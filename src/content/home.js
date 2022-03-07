import { fileType } from "../helpers/utils";
import execs from "../helpers/commands/execs";

const execContent = "Error: can not print an executable file.";

export const files = {
    "about.txt": {
        name: "about.txt",
        content: [
            "Halo semangat pagi, My name is Irvan. I currently work as HCMS46 at PT PLN (Persero) (https://pln.co.id).",
            "-----",
            "I've been a self-taught \"IT guy\" long before many of the IT's terms become mere jargon.",
            "Naturally, I always keen for a fulfilling jobs throughout DevOps, SRE, Cloud, or any System Engineering.",
            "------", 
            "Most of my projects are deployed from my homelab, including this site.",
            "It's been running 24/7 since August 2017.",
            "------", 
            "P.S. Credits to @Aavash for sharing his work. (https://link.tristian.id/s1ZoQl)"
        ],
        type: fileType.regular,
        longView: 'r--',
    },
    "resume": {
        name: "resume",
        content: [execContent],
        type: fileType.exec,
        run: execs['resume'],
        longView: 'r-x',
    },
    // "dear-recruiter.txt": {
    //     name: "dear-recruiter.txt",
    //     content: [
    //         "My name is Irvan Tristian, I’ve been working at Indonesia State-Owned Enterprise for over 12 years, permanent employee, started as Railway track Technician at PT Kereta Api Indonesia (Persero) for 1,5 years, then I moved to PT PLN (Persero) to become High & Extra High Voltage Live Line Maintenance Engineer for almost 7 years. And in the last 3 and half years, I’ve worked as Human Resources and General Affairs Administration Officer, still at the same company. I am always open for a fulfilling job involving DevOps, SRE, or any System Engineering.",
    //         "\n\n",
    //         "Despite my job title at SoE, I always have some fondness for IT, or anything tech actually. I’ve been considering myself a self-taught IT guy long before it’s booming like nowadays.",
    //         "- I joined several “Phreaker” communities in 2010-2014, yes, to get free internet. I don’t know if many can relate. There was a time when the internet was a luxury, at least for me.",
    //         "- I learned many things from that free internet. I got into hacking, networking, buying Linux VPS to sell ssh tunneling services, I sell stuff, I mined Bitcoin when its price was still 1 - 2mio that time and got cash in USD PayPal.All just for fun.",
    //         "- I once created a python script to scrape jakartanotebook.com and created some kind of macros script to automatically post their 17.000+ products into Tokopedia. But it turned out, I got overwhelmed by the buyers and I couldn't manage the store as a result.",
    //         "- I also love building PCs with my hands, from unlocking Phenom cores to overclocking Intel Sandy/ Ivy bridge era.",
    //         "- In 2017 I invested in building a 480+MH / s eth miner using no less than 24 GPUs.",
    //         "- That was the time when I first learned a lot about IoT, Arduino, Raspberry Pi, and managing Linux servers at home and became a Home Automation Enthusiast funded by my crypto money.",
    //         "- I was also a Hackintosh user; I triple boot my laptop in a single SSD(OS X El Capitan, Kali Linux, Windows 10).",
    //         "- Since 2019 I'm no longer playing games on a bare-metal PC. Not because I stopped, but I've been playing it on Linux KVM with GPUs passthrough! All my OSes are on type- 2 hypervisor (Virtualization).It can even run MacOS.",
    //         "- I've been maintaining my self-hosted homelab since 2017 that runs many containerized services including my IoTs & Smart Home applications.",
    //         "- Well, actually there are so many things I've been doing related to my hobby of IT. Just don't let me start with the greyish cybersecurity spiral.",
    //         "- TLDR; I just love exploring my curiosity.I literally can do and can DIY everything that I'm willing to or able to find on the internet. Just like I have designed, built, and installed electrical & power systems in my house, even the plumbing systems by myself with my only hands. Yep, I've done them with no prior experience.",
    //         "\n\n",
    //         "So, you might have probably heard a joke that tells you “When you have any problems to fix, just ask an IT guy, he’ll know the answer or he'll be able to fix it”. Well, many people in tech say that was ridiculous. But for me, I would say It just really resonates with me in my day-to-day life. In fact, I am that guy, I am the one who is being asked for any IT or technology-related stuff. It's just my thing. I'm a problem solver machine, I'm a learning machine. I genuinely love doing it.",
    //         "The deal is, like many self-taught learners, I have that “can-do” attitude. I hate telling others that I can't, before I’ve deeply googled it. Meanwhile, in the working environment, I always love to improve our systems, our job, on how we can work more efficiently and effectively by involving tech or automation between the lines. Because, I'm simply a \"lazy\" person.",
    //         "\n\n",
    //         "Why just now?",
    //         "It starts in the year 2020, covid outbreak, privileged workers like me got working from home. I have just realized after many years of hobbying. It turned out, there were so many-many opportunities out there to learn new skills, to make my dream as \"a real IT guy\" come true, and have a purpose.",
    //         "So I asked myself, “Do I really want to be “just a step up from the office boy” my whole life?”. I mean no offense, I think everybody has his purposes. It's just, I truly want to solve big problems and create impactful value with code, with my tech skill and knowledge. Because, I have a pretty high standard of myself. Out of curiosity, in April 2021, I found out that I'm apparently qualified for being Mensa International's (Indonesia) member after taking the admission test. Maybe that's why I'm pretty good at IT, like the majority of the members. Yes, I'm that savvy.",
    //         "\n\n",
    //         "Then I set up a goal and have been working hard;",
    //         "I have completed one of the best CS courses (maybe) in the world, CS50.",
    //         " - I have completed the Digital Talent Scholarship Kominfo for 3(three) consecutive times as Top Student, and I passed each certification given in the program(PCAP, GCP ACE, CCNA).",
    //         " - I also got many opportunities to learn and passed many certifications that are \"freely available\" ranging from Microsoft to Alibaba Cloud.",
    //         " - I deployed a bare- metal Kubernetes cluster at home using 4 unused laptops.",
    //         " - Even I paid for CKA certifications(that’s currently at 375$), and I passed it on the first attempt.",
    //         " - My target for 2022 is passing CKS considering my natural interest in security, also getting LFCS, and most importantly getting a job in the relevant IT field(DevOps, SRE, Cloud or any System Engineering).",
    //         "\n\n",
    //         "Lastly, one of the things that I enjoyed the most more than anything else is Learning New Things.",
    //         "Like: > Getting curious about something > Tinkering > Fiddling around > Learning through try and error > and eventually becoming pretty good at something.",
    //         "That's one of my life's joys; mastery.",
    //         "\n\n",
    //         "I hope I'm on the right track and the right company by applying for this job to fulfill my true potential. Thank you for considering me.",
    //         "\n\n",
    //         "Sincerely",
    //         "Irvan Tristian"
    //     ],
    //     type: fileType.regular,
    //     longView: 'r--',
    // },
    "k8s-at-home": {
    name: "k8s-at-home",
        content: [execContent],
        type: fileType.exec,
        run: execs['k8s-at-home'],
        longView: 'r-x',
    },
}

// only file keys for faster access
// also because Object.Keys is newish
// need to get rid of this eventually
export const fileKeys = ["about.txt", "resume", "k8s-at-home"]