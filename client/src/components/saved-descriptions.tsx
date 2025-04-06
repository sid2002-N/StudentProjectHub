import { useQuery } from "@tanstack/react-query";
import { apiRequest, getQueryFn } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

interface GeneratedDescription {
  id: number;
  shortDescription: string;
  description: string;
  projectTitle: string;
  projectType: string;
  technologies: string[];
  features: string[];
  userId: number | null;
  saved: boolean;
  createdAt: string;
}

export default function SavedDescriptions() {
  const [selectedDescription, setSelectedDescription] = useState<GeneratedDescription | null>(null);
  
  const { data: descriptions, isLoading, error } = useQuery<GeneratedDescription[]>({
    queryKey: ['/api/generated-descriptions'],
    queryFn: getQueryFn<GeneratedDescription[]>({ on401: 'returnNull' })
  });

  if (isLoading) {
    return (
      <div className="w-full space-y-3 mt-8">
        <h2 className="text-2xl font-bold tracking-tight">Saved Descriptions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="w-full h-[250px] overflow-hidden">
              <CardHeader className="pb-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-24 w-full" />
              </CardContent>
              <CardFooter className="pt-2">
                <Skeleton className="h-8 w-24" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full space-y-3 mt-8">
        <h2 className="text-2xl font-bold tracking-tight">Saved Descriptions</h2>
        <Card className="bg-destructive/10 border-destructive">
          <CardHeader>
            <CardTitle>Error Loading Saved Descriptions</CardTitle>
            <CardDescription>
              Could not load saved descriptions from the database.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Please try again later or contact support if the issue persists.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!descriptions || descriptions.length === 0) {
    return (
      <div className="w-full space-y-3 mt-8">
        <h2 className="text-2xl font-bold tracking-tight">Saved Descriptions</h2>
        <Card className="border-dashed border-muted-foreground/50">
          <CardHeader>
            <CardTitle>No Saved Descriptions</CardTitle>
            <CardDescription>
              You haven't saved any generated descriptions yet.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Generate and save descriptions to view them here.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6 mt-8">
      <h2 className="text-2xl font-bold tracking-tight">Saved Descriptions</h2>
      
      {selectedDescription ? (
        <Tabs defaultValue="short" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="short">Short Description</TabsTrigger>
              <TabsTrigger value="full">Full Description</TabsTrigger>
            </TabsList>
            <Button variant="outline" onClick={() => setSelectedDescription(null)}>
              Back to All
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>{selectedDescription.projectTitle}</CardTitle>
              <CardDescription>
                <span className="text-sm font-medium">Type: </span>
                <Badge variant="outline" className="ml-1 capitalize">{selectedDescription.projectType}</Badge>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedDescription.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TabsContent value="short" className="mt-0">
                <p>{selectedDescription.shortDescription}</p>
              </TabsContent>
              <TabsContent value="full" className="mt-0">
                <p className="whitespace-pre-line">{selectedDescription.description}</p>
              </TabsContent>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                Created on {new Date(selectedDescription.createdAt).toLocaleDateString()}
              </p>
            </CardFooter>
          </Card>
        </Tabs>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {descriptions.map((desc) => (
            <Card 
              key={desc.id} 
              className="cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => setSelectedDescription(desc)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg truncate">{desc.projectTitle}</CardTitle>
                <CardDescription>
                  <Badge variant="outline" className="capitalize">{desc.projectType}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="line-clamp-3 text-sm">{desc.shortDescription}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {desc.technologies.slice(0, 3).map((tech: string) => (
                  <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                ))}
                {desc.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs">+{desc.technologies.length - 3}</Badge>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}