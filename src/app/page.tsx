import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BadgeDollarSignIcon,
  DollarSign,
  PercentDiamond,
  Users2Icon,
} from "lucide-react";

export default function Home() {
  return (
    <main className="p-4 sm:ml-14">
      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="select-none text-lg text-muted-foreground sm:text-xl">
                Total vendas
              </CardTitle>
              <DollarSign className="ml-auto size-4" />
            </div>
            <CardDescription>
              Total em vendas nos últimos 90 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base font-bold sm:text-lg">R$ 40.000,00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="select-none text-lg text-muted-foreground sm:text-xl">
                Novos clientes
              </CardTitle>
              <Users2Icon className="ml-auto size-4" />
            </div>
            <CardDescription>
              Novos clientes nos últimos 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base font-bold sm:text-lg">23</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="select-none text-lg text-muted-foreground sm:text-xl">
                Pedidos hoje
              </CardTitle>
              <PercentDiamond className="ml-auto size-4" />
            </div>
            <CardDescription>Total de pedidos feitos hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base font-bold sm:text-lg">54</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="select-none text-lg text-muted-foreground sm:text-xl">
                Total pedidos
              </CardTitle>
              <BadgeDollarSignIcon className="ml-auto size-4" />
            </div>
            <CardDescription>
              Total de pedidos feitos nos últimos 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base font-bold sm:text-lg">1894</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col gap-4 md:flex-row">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}
