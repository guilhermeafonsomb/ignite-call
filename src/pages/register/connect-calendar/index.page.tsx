import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { signIn, useSession } from "next-auth/react";
import { ArrowRight } from "phosphor-react";

import { Container, Header } from "../styles";
import * as S from "./styles";

export default function ConnectCalendar() {
  const session = useSession();
  async function handleRegister() {}

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
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn("google")}
          >
            Conectar
            <ArrowRight />
          </Button>
        </S.ConnectItem>
        <Text>{JSON.stringify(session.data)}</Text>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </S.ConnectBox>
    </Container>
  );
}
