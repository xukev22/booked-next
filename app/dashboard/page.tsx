import BaseContainer from "@/components/base-container";
import DashboardMain from "@/components/dashboard-main";
import SessionContextWrapper from "@/context/session-context-wrapper";

export default function Dashboard() {
  return (
    <SessionContextWrapper>
      <BaseContainer>
        <DashboardMain />
      </BaseContainer>
    </SessionContextWrapper>
  );
}
