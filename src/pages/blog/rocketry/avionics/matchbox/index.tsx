import Image from "next/image";
import Link from "next/link";
import matchbox from "../../../../../../public/blog/images/matchbox/matchbox.png";

const Page = () => {
  return (
    <div className="space-y-5 m-6 lg:w-3/4 xl:w-1/2">
      <h1 className="text-3xl">
        Matchbox, an igniter and remote launch stand computer
      </h1>
      <Image
        width={600}
        height={0}
        src={matchbox}
        alt="Matchbox launch stand computer"
        className="mx-auto"
      />
      <p>
        Matchbox is in many ways identical to the{" "}
        <Link
          href="/blog/rocketry/avionics/wheatley"
          className="hover:underline"
        >
          Wheatley
        </Link>{" "}
        board, but smaller and more simple. The STM32H7 of Wheatley has been
        replaced with an STM32F4 with significantly less GPIO. Everything else
        is almost identical, though. The sensors have been removed, it doesn't
        particularly need to know its height, GPS location, the relative
        barometric pressure, etc. It simply needs to receive a radio signal to
        trigger a mosfet and not much else.
      </p>
      <p>
        One goal of the Matchbox line of computers was to be a test bed for
        different MOSFETS for pyrotechnic deployment. I would like to test
        different means of deploying recovery systems and testing different
        boards (while potentially cooking components) was important to do at low
        cost. I don't really want to melt a Wheatley board if I can help it, all
        because my math was a bit off. A sacrificial board is much more helpful
        for that. Plus the lack of complexity means I can pretty quickly isolate
        issues. If, for example, a rocket motor does not fire, there's a fixed
        number of items that it could be on this board.
      </p>
      <p>
        The reason behind the name "Matchbox" was a no-brainer, really. What
        does it do? It lights rockets, like an e-match. It's also a much smaller
        variation of my boards, like a Matchbox car to a real car. It does not
        conform to the bread-based punnery of the mainline flight computers, but
        I think this is worth an exception.
      </p>
    </div>
  );
};

export default Page;
