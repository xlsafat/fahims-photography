import { SectionHeading } from "./SectionHeading";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Reveal } from "./Reveal";

const EDIT_IMAGE = {
  id: "1524638431109-93d95c968f03",
  alt: "Woman with bold red lipstick lit by colourful city lights at night",
};

export function TheEdit() {
  return (
    <section id="craft" className="bg-ivory py-28 sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <SectionHeading
          eyebrow="The Craft"
          title="Same frame, different story"
          description="Every photograph here gets a second act at the desk — colour, contrast, and restraint. Drag the line to see how much of the feeling is built after the shutter closes."
        />

        <Reveal delay={0.15} className="mt-14">
          <BeforeAfterSlider id={EDIT_IMAGE.id} alt={EDIT_IMAGE.alt} />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 text-sm text-charcoal-soft/50">
            Drag the handle, or focus it and use ← / → .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
