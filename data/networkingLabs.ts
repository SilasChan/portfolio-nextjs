export type NetworkingLab = {
  slug: string
  title: string
  description: string
  imgURL: string
  technologies: string[]
  status: "Completed" | "In Progress"
}

export const networkingLabs: NetworkingLab[] = [
  {
    slug: "enterprise-vlan-routing",
    title: "Enterprise VLAN & Inter-VLAN Routing",
    description:
      "Configured a Cisco network lab covering VLAN segmentation, inter-VLAN routing, VLSM subnetting, EtherChannel and switch security.",
    imgURL: "/labs/networking/enterprise-vlan-topology.png",
    technologies: [
      "Cisco Packet Tracer",
      "VLAN",
      "VLSM",
      "802.1Q",
      "EtherChannel",
      "SSH",
      "Port Security",
    ],
    status: "Completed",
  },
]
