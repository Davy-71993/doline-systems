import Container from "@/components/layout/Container";
import Scheduler from "@/components/parts/Scheduler";

function SchedulePage() {
  return (
    <Container>
      <h1 className="text-5xl text-center font-bold">
        We {"can't"} wait to talk to you.
      </h1>
      <Scheduler />
    </Container>
  );
}

export default SchedulePage;
