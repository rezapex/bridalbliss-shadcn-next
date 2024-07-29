import { ChevronDownIcon } from "@radix-ui/react-icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"
import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"

const roles = [
  { name: "Viewer", description: "Can view and comment." },
  { name: "Developer", description: "Can view, comment and edit." },
  { name: "Billing", description: "Can view, comment and manage billing." },
  { name: "Owner", description: "Admin-level access to all resources." },
]

const TeamMember = ({ name, email, avatar, role }) => (
  <div className="flex items-center justify-between space-x-4">
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
    </div>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="ml-auto">
          {role}
          <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="end">
        <Command>
          <CommandInput placeholder="Select new role..." />
          <CommandList>
            {roles.length === 0 && <CommandEmpty>No roles found.</CommandEmpty>}
            <CommandGroup>
              {roles.map((r) => (
                <CommandItem key={r.name}>
                  <div className="flex flex-col items-start px-4 py-2">
                    <p>{r.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
)

export function DemoTeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <TeamMember
          name="Sofia Davis"
          email="m@example.com"
          avatar="/avatars/01.png"
          role="Owner"
        />
        <TeamMember
          name="Jackson Lee"
          email="p@example.com"
          avatar="/avatars/02.png"
          role="Member"
        />
      </CardContent>
    </Card>
  )
}