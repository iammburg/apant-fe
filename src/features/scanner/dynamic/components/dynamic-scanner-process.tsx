import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function DynamicScannerProcess() {
  return (
    <div>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="border-primary border">
          <TabsTrigger
            value="overview"
            className="data-active:bg-primary data-active:text-background"
          >
            Scan Information
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-active:bg-primary data-active:text-background"
          >
            Vulnerabilities
          </TabsTrigger>
          <TabsTrigger
            value="reports"
            className="data-active:bg-primary data-active:text-background"
          >
            Directory
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="data-active:bg-primary data-active:text-background"
          >
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="overview"
          className="border-primary flex flex-col flex-wrap gap-4 border p-4"
        >
          <div className="flex w-full flex-row flex-wrap gap-4">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Scan Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">15m 07s</p>
                <p>Total time required for scanning</p>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">124</p>
                <p>Total requests made to the URL</p>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Paths Identified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">113</p>
                <p>Total Paths</p>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Paths Identified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">113</p>
                <p>Total Paths</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex w-full flex-row flex-wrap gap-4">
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="text-base">Target Information</CardTitle>
                <CardDescription className="text-sm">
                  Information about Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <hr />
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Address</span>
                    <span className="text-destructive">http://ndaru.com</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Server</span>
                    <span>Nginx</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Operating System</span>
                    <span>Linux</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Information Technology</span>
                    <span>PHP</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Responsive</span>
                    <span>Yes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Lorem Ipsum</span>
                    <span>Linux</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="text-base">Activity Process</CardTitle>
                <CardDescription className="text-sm">
                  Activity process Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <hr />
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Address</span>
                    <span className="text-destructive">http://ndaru.com</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Server</span>
                    <span>Nginx</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Operating System</span>
                    <span>Linux</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Information Technology</span>
                    <span>PHP</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Responsive</span>
                    <span>Yes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Lorem Ipsum</span>
                    <span>Linux</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Vulnerabilities</CardTitle>
              <CardDescription>
                Track performance and user engagement metrics. Monitor trends and identify growth
                opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Directory</CardTitle>
              <CardDescription>
                Generate and download your detailed reports. Export data in multiple formats for
                analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              You have 5 reports ready and available to export.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and options. Customize your experience to fit your
                needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Configure notifications, security, and themes.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
