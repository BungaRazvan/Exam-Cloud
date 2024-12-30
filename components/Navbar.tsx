import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

const AWSCloudPractitionerPractiseExams = () => {
  const links = [];
  let count = 1;

  while (count <= 23) {
    links.push(
      <MenubarItem>
        <Link href={`/aws/cloud-practitioner/practise-exam/${count}`}>
          Practise Exam #{count}
        </Link>
      </MenubarItem>
    );
    count++;
  }

  return links;
};

const Navbar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>AWS</MenubarTrigger>

        <MenubarContent>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Cloud Practitioner</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Link href="/">Random Exam</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link href="/">Practise Random Exam</Link>
              </MenubarItem>
              <MenubarSeparator />
              <AWSCloudPractitionerPractiseExams />
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
