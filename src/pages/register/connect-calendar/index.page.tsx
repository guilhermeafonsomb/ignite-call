import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ArrowRight, Check } from "phosphor-react";

import { Container, Header } from "../styles";
import * as S from "./styles";

export default function ConnectCalendar() {
  const session = useSession();
  console.log(session);
  const router = useRouter();

  const hasAuthError = !!router.query.error;
  const isSignedIn = session.status === "authenticated";

  async function handleConnectCalendar() {
    signIn("google");
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamene as horas
          ocupadas e os novos evendos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <S.ConnectBox>
        <S.ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button size="sm" disabled>
              Conectado <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </S.ConnectItem>

        {hasAuthError && !isSignedIn && (
          <S.AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitrou as
            permissões de acesso ao Google Calendar.
          </S.AuthError>
        )}

        <Button type="submit" disabled={!isSignedIn}>
          Próximo passo <ArrowRight />
        </Button>
      </S.ConnectBox>
    </Container>
  );
}
