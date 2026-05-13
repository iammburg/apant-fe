import { cn } from '#/lib/utils'
import { Button } from '#/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'
import { Field, FieldDescription, FieldGroup, FieldLabel } from '#/components/ui/field'
import { Input } from '#/components/ui/input'

export function RegisterForm({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex w-full flex-col gap-6', className)} {...props}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Fill in the details below to set up your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" type="text" placeholder="pinkmonkeys" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="youremail@email.com" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="confirmPassword">Confirm password</FieldLabel>
                <Input id="confirmPassword" type="password" required />
              </Field>
              <Field>
                <Button type="submit">Register</Button>
                <FieldDescription className="text-center">
                  Already have an account? <a href="/login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
