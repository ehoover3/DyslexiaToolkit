import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indicators',
};

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Indicators</h1>
      </div>
      <div>
        If a child has 3 ore more of the following, encourage that child&apos;s
        parents and teachers to learn more about dyslexia.
      </div>
      <ol>
        <li style={{ fontWeight: 'bold' }}>In Preschool</li>
        <li>delayed speech</li>
        <li>mixing up the sounds and syllables in long words</li>
        <li>chronic ear infections</li>
        <li>severe reactions to childhood illnesses</li>
        <li>constnat confusion of left versus right</li>
        <li>late establishing a dominant hand</li>
        <li>difficulty learning to tie shoes</li>
        <li>trouble memorizing their address, phone number, or the alphabet</li>
        <li>cannot create words that rhyme</li>
        <li>a close relative with dyslexia</li>

        <li style={{ fontWeight: 'bold' }}>In Elementary School</li>
        <li>
          dysgraphia (slow, non-automatic handwriting that is difficult to read)
        </li>
        <li>
          letter or number reversals continuing past the end of first grade
        </li>
        <li>extreme difficulty learning cursive</li>
        <li>
          slow, choppy, inaccurate reading: guesses based on shape or context,
          skips or misreads prepositions (at, to of), ignores suffixes,
          can&apos;t sound out unknown words
        </li>
        <li>terrible spelling</li>
        <li>
          often cannot remember sight words (they, were does) or homonyms
          (their, they&apos;re, and there)
        </li>
        <li>difficulty telling time with a clock with hands</li>
        <li>
          trouble with math: memorizing multiplication tables, memorizing a
          sequence of steps, directionality
        </li>
        <li>
          when speaking, difficulty finding the correct word: lots of
          "whatyamacallits" and "thingies", common sayings come out slightly
          twisted
        </li>
        <li>extremely mess bedroom, backpack, and desk</li>
        <li>
          dreads going to school: complains of stomach aches or headaches, may
          have nightmares about school
        </li>

        <li style={{ fontWeight: 'bold' }}>In High School</li>
        <li>All of the above symptoms plus:</li>
        <li>limited vocabulary</li>
        <li>
          extremely poor written expression: large discrepancy between verbal
          skills and written compositions
        </li>
        <li>unable to master a foreign language</li>
        <li>difficulty reading printed music</li>
        <li>poor grades in many classes</li>
        <li>may drop out of high school</li>

        <li style={{ fontWeight: 'bold' }}>In Adults</li>
        <li>Education history similar to above, plus:</li>
        <li>slow reader</li>
        <li>may have to read a page 2 or 3 times to understand it</li>
        <li>terrible speller</li>
        <li>
          difficulty putting thoughts onto paper: dreads writing memos or
          letters
        </li>
        <li>still has difficulty with right versus left</li>
        <li>often gets lost, even in a familiar city</li>
        <li>sometimes confuses b and d, especially when tired or sick</li>
      </ol>
    </div>
  );
}
