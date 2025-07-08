import BaseContainer from "@/components/base-container";
import Calendar from "@/components/calendar";
import Feature from "@/components/feature";
import Profile from "@/components/profile";
import SessionContextWrapper from "@/context/session-context-wrapper";

export default function Dashboard() {
  return (
    <SessionContextWrapper>
      <BaseContainer>
        <Profile />
        <Feature title="Top 5 Books:" books={[]} maxLength={5} />
        <Calendar />
      </BaseContainer>
    </SessionContextWrapper>
  );
}
