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
import { Field, FieldGroup, FieldLabel } from '#/components/ui/field'
import { Input } from '#/components/ui/input'
import { Button } from '#/components/ui/button'
import { Textarea } from '#/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import DynamicScannerProcess from './dynamic-scanner-process'

export default function DynamicScannerForm() {
  return (
    <div>
      <Card className="border-primary mb-10 w-full border">
        <CardHeader>
          <CardTitle>Add Target</CardTitle>
          <CardDescription>
            Insert URL of the target Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.
          </CardDescription>
          {/* <CardAction>Card Action</CardAction> */}
        </CardHeader>
        <form>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="address">URL Address</FieldLabel>
                <Input
                  id="address"
                  name="address"
                  type="url"
                  placeholder="https://yourtarget.com"
                  required
                  autoComplete="url"
                  autoFocus
                  inputMode="url"
                />
              </Field>
              <Field className="w-full">
                <FieldLabel htmlFor="scanType">Scan Type</FieldLabel>
                <Select>
                  <SelectTrigger className="w-full max-w-48">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Please select scan type</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea id="description" name="description"></Textarea>
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter className="mt-6 gap-2">
            <Button type="submit">Submit</Button>
            <Button type="reset" variant="outline">
              Reset
            </Button>
          </CardFooter>
        </form>
      </Card>
      <DynamicScannerProcess />
    </div>
  )
}
