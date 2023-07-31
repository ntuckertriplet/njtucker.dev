import Image from "next/image";
import compute from "../../../../../public/blog/images/compute.png";
import proxmox from "../../../../../public/blog/images/proxmox.png";
import storage from "../../../../../public/blog/images/storage.png";
import switches from "../../../../../public/blog/images/switches.png";

const Page = () => {
  return (
    <div className="space-y-5 m-6 lg:w-3/4 xl:w-1/2">
      <h1 className="text-4xl">Homelab on a Shoestring Budget</h1>
      <p>
        Homelab-ing is a very fun hobby for any budget and skill level. If it's
        just logging into a consumer router and playing around a bit or buying a
        server rack and loading it up with the latest and greatest enterprise
        gear, it's really hard to go wrong as long as you're learning and having
        fun. I'm just going to give an overview of what I run in my homelab.
        I'll also briefly touch on what I like and what I don't like about it
        and what my plans are in the near future broken down into 3 sections:
        Compute, Networking, and Storage.
      </p>
      <h1 className="text-3xl">That sweet, sweet, storage space</h1>
      <p>
        I run an instance of TrueNAS Core on an older HP Storageworks P4500 G2.
        This is by no means the latest and greatest in storage solutions and is
        quite old relative to some of the better storage alternatives. However,
        for my purposes, it works fine, with 12 3.5" storage bays and room for
        expansion in the back if I wanted to add a SAS card for more hard drives
        down the road.
      </p>
      <p>
        I am running a bit of a strange setup with the actual drives in the
        system as, again, I am very budget limited, so I will take what I can
        get in that regard. I am running several 3 TB hard drives in their own
        RAID-Z in one storage pool. I have zvols made from this formatted as
        NTFS because it works on most if not all distros and is easy to repair
        in the event of a power failure or sudden ejection/unmounting. This is
        all being shared over iSCSI to the various compute hosts, which I will
        talk about in the next section. For future plans, I am going to
        purchases an external SAS connector to connect to an EMC disk shelf that
        I purchased from a local surplus store for a quarter. I have more drives
        than can fit in the HP and I would expand my storage by 15 slots!
      </p>
      <Image
        width={1000}
        height={0}
        src={storage}
        alt="my shared storage array"
        className="mx-auto"
      />
      <h1 className="text-3xl">Compute/Virtualization</h1>
      <p>
        For virtualization, I run a few Dell Poweredge servers with Proxmox as
        the host OS and virtualization option. I do this simply because it is
        free. If I had the money I would use ESXi and vCenter which is what is
        used at my research lab, but I am a student on a budget, and Proxmox
        works more than adequately for my use case.
      </p>
      <Image
        width={1000}
        height={0}
        src={proxmox}
        alt="a screenshot of my proxmox cluster setup"
        className="mx-auto"
      />
      <p>
        The physical servers are 2 Dell Poweredge R720s, 2 Dell Poweredge R710s,
        and an HP DL380 G7. These are all fairly older machines and are perfect
        for the homelab scene. They are relatively quiet, much more so than
        their single rack height counterparts, and run cool enough. I do tend to
        only have the R720s powered on when I can though, as I want to keep
        electricity costs down when I am in Texas. Despite being the only
        available servers during the winter time however, they provide more than
        enough horsepower for me to host this website, an instance of Emby, a
        Gitlab, a Domain Controller, and an NGINX proxy to serve all my content.
        Additionally, when I have electricity to spare, I offer up compute to
        the Folding@home distributed computing project to fight cancers and
        COVID-19. If I have more specific configuration information I will post
        that in a future blog installation, but that's all that's needed for
        now. Ultimately I am actually looking to downsize my compute resource.
        It's honestly too much for one person to have and only a couple servers
        are ever utilized at a time.
      </p>
      <Image
        width={1000}
        height={0}
        src={compute}
        alt="my Dell compute nodes"
        className="mx-auto"
      />
      <h1 className="text-3xl">Moving packets from one place to another</h1>
      <p>
        This is perhaps the least interesting part of the setup to some. Just
        slap a switch in your lab, hook up some cables, and you're set right?
        Well, yes, I suppose, but there's so much potential for learning and
        enjoyment. I run a Cisco Catalyst 3750X 24 port POE switch in my
        homelab. That was a lot of words and acronyms, but all it means is it
        has 24 RJ45 ports for ethernet and has Power Over Ethernet, meaning I
        can power access points, security cameras, etc. Currently I have my
        compute vlan for my servers and a wifi vlan for my Cisco APs and not
        much else. Speaking of those APs (Access Points) I have several Cisco
        3502i access points, only 1 of which I am utilizing at the moment. I
        live in a 1 bedroom apartment, any more than 1 would honestly be
        overkill. All of the routing is done via an R620 running pFsense, which
        is a very common thing to see in homelabs. I have heard good things
        about alternatives, as some recent updates to pFsense have not been so
        great. In the future I plan to upgrade my networking from gigabit
        internal to 40 Gigabit internal networking with the use of Mellanox
        Connect-X 3 Pros and an Arista switch. I do not have one in mind, but
        rather, I am just looking for one that's at least reasonably priced and
        is 40 Gb capable.
      </p>
      <Image
        width={1000}
        height={0}
        src={switches}
        alt="network switches"
        className="mx-auto"
      />
      <h1 className="text-3xl">Oh yeah, how is all this stored and run?</h1>
      <p>
        Well, in prior pictures, it was not featured, but you got to see my
        rack, which is a Great Lakes rack. It would definitey not be my first
        pick, it has missing side panels, and is a bit dinged up from being
        moved all over the country, but it was free from a local business, so
        what's a guy to do? It has 44 rack units and is ever so slightly shallow
        that I can't close both the front <em>and</em> back doors, but it keeps
        the servers off the floor. I am also running a couple 9 plug PDUs to
        power everything and I have a Dell 500W UPS in the event of a power
        outage. By no means is everything plugged into it, but I have my main
        compute server, the storage boxes, and a switch plugged in, just so I
        can safely power off and unmount all storage so the repair process is
        much more minimal.
      </p>
    </div>
  );
};

export default Page;
