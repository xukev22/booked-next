import BaseContainer from "@/components/base-container";
import Feature from "@/components/feature";
import FPFeature from "@/components/fp-feature";

export default function Library() {
  return (
    <BaseContainer>
      <div className="p-24">
        <FPFeature title="Your library..." books={[]} booksPerPage={6} />
        <FPFeature title="Your reading list..." books={[]} />
      </div>
    </BaseContainer>
  );
}
