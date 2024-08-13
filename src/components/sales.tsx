import { BadgeDollarSignIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Sales = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg text-muted-foreground sm:text-xl">
            Últimos clientes
          </CardTitle>
          <BadgeDollarSignIcon className="ml-auto size-4" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="size-8 rounded-full border border-primary">
            <AvatarImage src="https://www.github.com/jhonatan-oliveiradev.png" />
            <AvatarFallback>JO</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xs text-foreground sm:text-sm">
              Jhonatan Oliveira
            </span>
            <span className="text-xs italic text-muted-foreground">
              jhonatan@email.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="size-8 rounded-full border border-primary">
            <AvatarImage src="https://www.github.com/jhonatan-oliveiradev.png" />
            <AvatarFallback>JO</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xs text-foreground sm:text-sm">
              Jhonatan Oliveira
            </span>
            <span className="text-xs italic text-muted-foreground">
              jhonatan@email.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="size-8 rounded-full border border-primary">
            <AvatarImage src="https://www.github.com/jhonatan-oliveiradev.png" />
            <AvatarFallback>JO</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xs text-foreground sm:text-sm">
              Jhonatan Oliveira
            </span>
            <span className="text-xs italic text-muted-foreground">
              jhonatan@email.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};
