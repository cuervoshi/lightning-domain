import Link from 'next/link';
import Image from 'next/image';
import { TwitterLogoIcon, DiscordLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';

import { Button } from '~/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-12">
        <Image className="mx-auto" src="/logotipo.svg" alt="LaWallet.io logo" width={165} height={30} />

        <main className="space-y-12">
          <section className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6">Bienvenido a LNBot.io</h1>
            <p className="mb-8 text-muted-foreground">
              Este bot genera una billetera de ligthning network para cada usuario de tu servidor de discord. Esto
              permite enviar, recibir, retirar y reclamar satoshis (la unidad de medida más pequeña de bitcoin) desde
              una simple cuenta de discord.
            </p>
            <p className="mb-8 text-muted-foreground">
              Todo esto es posible gracias al stack de <a href="https://lawallet.io">LaWallet</a>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
              >
                <Link href="https://app.lnbot.io/login">Ingresá a tu billetera</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                <Link href="https://discord.com/oauth2/authorize?client_id=1283094721358598256">
                  Agregá el bot a tu servidor de Discord
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <footer className="text-center text-muted-foreground">
          <div className="flex justify-center gap-1 mb-4">
            <Button size="icon" variant="link" asChild>
              <Link title="X/Twitter" href="https://twitter.com/lawalletok" target="_blank" rel="noopener noreferrer">
                <TwitterLogoIcon />
              </Link>
            </Button>
            <Button size="icon" variant="link" asChild>
              <Link title="Github" href="https://github.com/lawalletio" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon />
              </Link>
            </Button>
            <Button size="icon" variant="link" asChild>
              <Link title="Discord" href="https://discord.gg/lawallet" target="_blank" rel="noopener noreferrer">
                <DiscordLogoIcon />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <p>&copy; 2024</p>
            <Button asChild variant="link">
              <Link href="https://lawallet.io/" title="LaWallet Labs">
                lawallet.io
              </Link>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}
