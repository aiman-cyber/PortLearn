

/* ---------- Data: lessons ---------- */
const LEVELS = {
  beginner: {
    label: "Beginner",
    icon: "fa-seedling",
    sub: "New to networking",
    lessons: [
      {
        title: "What is a Port?",
        body: `
          <p>Every computer connected to a network has an <strong>IP address</strong> — think of it like the street address of an apartment building. But a building has many apartments, and to reach a specific one you also need a <strong>door number</strong>.</p>
          <p>In networking, that door number is called a <strong>port</strong>. Ports let a single computer run many services at once — web, email, file transfer — without them mixing up traffic.</p>
          <div class="callout"><i class="fa-solid fa-lightbulb"></i> A port is a number from <code>0</code> to <code>65535</code> that identifies a specific service on a computer.</div>
          <h3>The apartment analogy</h3>
          <ul>
            <li><strong>IP address</strong> = building address</li>
            <li><strong>Port number</strong> = apartment door number</li>
            <li><strong>Service</strong> = the person living inside</li>
          </ul>
        `,
      },
      {
        title: "How Ports Are Numbered",
        body: `
          <p>There are <strong>65,536</strong> possible ports (0 to 65,535). They are split into three ranges:</p>
          <div class="port-list">
            <div class="port-item">
              <div class="port-item__num">0–1023</div>
              <div class="port-item__name">Well-known</div>
              <div class="port-item__proto">Assigned to common services</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">1024–49151</div>
              <div class="port-item__name">Registered</div>
              <div class="port-item__proto">For specific applications</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">49152–65535</div>
              <div class="port-item__name">Dynamic</div>
              <div class="port-item__proto">Temporary / private use</div>
            </div>
          </div>
          <div class="callout callout--warn"><i class="fa-solid fa-triangle-exclamation"></i> Only the well-known ports are the ones you should memorize first — they are the most common in exams and real life.</div>
        `,
      },
      {
        title: "TCP vs UDP",
        body: `
          <p>Ports are used by two main protocols:</p>
          <ul>
            <li><strong>TCP</strong> — reliable, ordered delivery. Like a phone call: you confirm the other side is listening.</li>
            <li><strong>UDP</strong> — fast, no guarantee. Like a radio broadcast: send and hope it arrives.</li>
          </ul>
          <p>Some services use TCP, some use UDP, and a few use both. Knowing which is part of learning each port.</p>
          <div class="callout"><i class="fa-solid fa-circle-info"></i> Web traffic (HTTP/HTTPS) uses TCP because you want every byte to arrive correctly.</div>
        `,
      },
      {
        title: "The Big Three You Must Know",
        body: `
          <p>If you only learn three ports, learn these:</p>
          <div class="port-list">
            <div class="port-item">
              <div class="port-item__num">80</div>
              <div class="port-item__name">HTTP</div>
              <div class="port-item__proto">TCP — websites (unencrypted)</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">443</div>
              <div class="port-item__name">HTTPS</div>
              <div class="port-item__proto">TCP — secure websites</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">22</div>
              <div class="port-item__name">SSH</div>
              <div class="port-item__proto">TCP — secure remote login</div>
            </div>
          </div>
          <div class="callout"><i class="fa-solid fa-brain"></i> Whenever you visit a website, your browser is using port <code>443</code> right now.</div>
        `,
      },
      {
        title: "Beginner Recap",
        body: `
          <p>Nice work! You now know:</p>
          <ul>
            <li>A port is a number <code>0–65535</code> that identifies a service.</li>
            <li>Well-known ports are <code>0–1023</code>.</li>
            <li>TCP is reliable, UDP is fast.</li>
            <li><code>80</code> = HTTP, <code>443</code> = HTTPS, <code>22</code> = SSH.</li>
          </ul>
          <div class="callout"><i class="fa-solid fa-trophy"></i> You finished the Beginner track — ready for the quiz or the Intermediate level!</div>
        `,
      },
    ],
  },
  intermediate: {
    label: "Intermediate",
    icon: "fa-bolt",
    sub: "Know the basics",
    lessons: [
      {
        title: "Email Ports",
        body: `
          <p>Email uses several ports depending on whether it's sending or receiving, and whether the connection is encrypted.</p>
          <div class="port-list">
            <div class="port-item">
              <div class="port-item__num">25</div>
              <div class="port-item__name">SMTP</div>
              <div class="port-item__proto">TCP — sending mail (unencrypted)</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">465</div>
              <div class="port-item__name">SMTPS</div>
              <div class="port-item__proto">TCP — sending mail (SSL)</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">587</div>
              <div class="port-item__name">SMTP</div>
              <div class="port-item__proto">TCP — mail submission (TLS)</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">110</div>
              <div class="port-item__name">POP3</div>
              <div class="port-item__proto">TCP — receiving mail</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">995</div>
              <div class="port-item__name">POP3S</div>
              <div class="port-item__proto">TCP — secure POP3</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">143</div>
              <div class="port-item__name">IMAP</div>
              <div class="port-item__proto">TCP — receiving mail</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">993</div>
              <div class="port-item__name">IMAPS</div>
              <div class="port-item__proto">TCP — secure IMAP</div>
            </div>
          </div>
          <div class="callout"><i class="fa-solid fa-key"></i> The "S" at the end (SMTPS, POP3S, IMAPS) means the secure version of the protocol.</div>
        `,
      },
      {
        title: "File Transfer & Remote",
        body: `
          <p>Beyond SSH, several ports handle moving files and remote access:</p>
          <div class="port-list">
            <div class="port-item">
              <div class="port-item__num">20</div>
              <div class="port-item__name">FTP Data</div>
              <div class="port-item__proto">TCP — file transfer data</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">21</div>
              <div class="port-item__name">FTP Control</div>
              <div class="port-item__proto">TCP — FTP commands</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">69</div>
              <div class="port-item__name">TFTP</div>
              <div class="port-item__proto">UDP — trivial file transfer</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">23</div>
              <div class="port-item__name">Telnet</div>
              <div class="port-item__proto">TCP — old remote login (insecure)</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">3389</div>
              <div class="port-item__name">RDP</div>
              <div class="port-item__proto">TCP — Windows remote desktop</div>
            </div>
          </div>
          <div class="callout callout--warn"><i class="fa-solid fa-triangle-exclamation"></i> Telnet (23) sends passwords in plain text — never use it on the open internet. Use SSH (22) instead.</div>
        `,
      },
      {
        title: "Name Resolution & Web",
        body: `
          <p>Before you reach a website, your computer has to find its IP address. That's DNS.</p>
          <div class="port-list">
            <div class="port-item">
              <div class="port-item__num">53</div>
              <div class="port-item__name">DNS</div>
              <div class="port-item__proto">TCP/UDP — domain name lookup</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">8080</div>
              <div class="port-item__name">HTTP Alt</div>
              <div class="port-item__proto">TCP — alternate web port</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">8443</div>
              <div class="port-item__name">HTTPS Alt</div>
              <div class="port-item__proto">TCP — alternate secure web</div>
            </div>
          </div>
          <div class="callout"><i class="fa-solid fa-globe"></i> When you type <code>google.com</code>, DNS on port <code>53</code> turns that name into an IP address.</div>
        `,
      },
      {
        title: "Intermediate Recap",
        body: `
          <p>You've now added email, file transfer, remote access, and DNS ports to your toolkit.</p>
          <ul>
            <li>SMTP family: <code>25, 465, 587</code></li>
            <li>POP3: <code>110 / 995</code>, IMAP: <code>143 / 993</code></li>
            <li>FTP: <code>20, 21</code>, TFTP: <code>69</code>, Telnet: <code>23</code></li>
            <li>DNS: <code>53</code>, RDP: <code>3389</code></li>
          </ul>
          <div class="callout"><i class="fa-solid fa-arrow-trend-up"></i> Ready for the Advanced track — where we go deeper into system and security ports.</div>
        `,
      },
    ],
  },
  advanced: {
    label: "Advanced",
    icon: "fa-rocket",
    sub: "Going deeper",
    lessons: [
      {
        title: "System & Network Services",
        body: `
          <p>These ports are common on servers and infrastructure devices:</p>
          <div class="port-list">
            <div class="port-item">
              <div class="port-item__num">67</div>
              <div class="port-item__name">DHCP Server</div>
              <div class="port-item__proto">UDP — gives out IP addresses</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">68</div>
              <div class="port-item__name">DHCP Client</div>
              <div class="port-item__proto">UDP — receives IP config</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">123</div>
              <div class="port-item__name">NTP</div>
              <div class="port-item__proto">UDP — time sync</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">161</div>
              <div class="port-item__name">SNMP</div>
              <div class="port-item__proto">UDP — network monitoring</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">162</div>
              <div class="port-item__name">SNMP Trap</div>
              <div class="port-item__proto">UDP — alerts</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">389</div>
              <div class="port-item__name">LDAP</div>
              <div class="port-item__proto">TCP — directory access</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">636</div>
              <div class="port-item__name">LDAPS</div>
              <div class="port-item__proto">TCP — secure LDAP</div>
            </div>
          </div>
        `,
      },
      {
        title: "Security & Encryption",
        body: `
          <p>Security-focused ports you should recognize:</p>
          <div class="port-list">
            <div class="port-item">
              <div class="port-item__num">49</div>
              <div class="port-item__name">TACACS+</div>
              <div class="port-item__proto">TCP — auth for network devices</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">88</div>
              <div class="port-item__name">Kerberos</div>
              <div class="port-item__proto">TCP/UDP — ticket auth</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">500</div>
              <div class="port-item__name">ISAKMP</div>
              <div class="port-item__proto">UDP — VPN key exchange</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">514</div>
              <div class="port-item__name">Syslog</div>
              <div class="port-item__proto">UDP — log messages</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">636</div>
              <div class="port-item__name">LDAPS</div>
              <div class="port-item__proto">TCP — secure directory</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">1701</div>
              <div class="port-item__name">L2TP</div>
              <div class="port-item__proto">UDP — VPN tunneling</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">1723</div>
              <div class="port-item__name">PPTP</div>
              <div class="port-item__proto">TCP — old VPN</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">4500</div>
              <div class="port-item__name">NAT-T</div>
              <div class="port-item__proto">UDP — VPN through NAT</div>
            </div>
          </div>
          <div class="callout callout--warn"><i class="fa-solid fa-shield-halved"></i> PPTP (1723) is considered insecure today — prefer L2TP/IPsec or WireGuard.</div>
        `,
      },
      {
        title: "Databases & App Services",
        body: `
          <p>Application and database ports every admin should know:</p>
          <div class="port-list">
            <div class="port-item">
              <div class="port-item__num">1433</div>
              <div class="port-item__name">MS SQL</div>
              <div class="port-item__proto">TCP — Microsoft SQL Server</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">1521</div>
              <div class="port-item__name">Oracle</div>
              <div class="port-item__proto">TCP — Oracle DB</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">3306</div>
              <div class="port-item__name">MySQL</div>
              <div class="port-item__proto">TCP — MySQL/MariaDB</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">5432</div>
              <div class="port-item__name">PostgreSQL</div>
              <div class="port-item__proto">TCP — Postgres</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">6379</div>
              <div class="port-item__name">Redis</div>
              <div class="port-item__proto">TCP — in-memory cache</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">27017</div>
              <div class="port-item__name">MongoDB</div>
              <div class="port-item__proto">TCP — NoSQL DB</div>
            </div>
            <div class="port-item">
              <div class="port-item__num">9200</div>
              <div class="port-item__name">Elasticsearch</div>
              <div class="port-item__proto">TCP — search engine</div>
            </div>
          </div>
        `,
      },
      {
        title: "Advanced Recap",
        body: `
          <p>You now have a full map of the most important ports:</p>
          <ul>
            <li>Infrastructure: DHCP <code>67/68</code>, NTP <code>123</code>, SNMP <code>161/162</code>, LDAP <code>389/636</code></li>
            <li>Security: Kerberos <code>88</code>, TACACS+ <code>49</code>, Syslog <code>514</code>, VPN <code>500/1701/1723/4500</code></li>
            <li>Databases: MySQL <code>3306</code>, Postgres <code>5432</code>, MSSQL <code>1433</code>, Redis <code>6379</code>, Mongo <code>27017</code></li>
          </ul>
          <div class="callout"><i class="fa-solid fa-medal"></i> You completed all three levels. Take the Advanced quiz to prove it!</div>
        `,
      },
    ],
  },
};

/* ---------- Data: quizzes ---------- */
const QUIZZES = {
  beginner: [
    {
      q: "What range of numbers can a port be?",
      options: ["0 – 100", "0 – 1023", "0 – 65535", "1 – 9999"],
      answer: 2,
      explain: "Ports range from 0 to 65,535 — a total of 65,536 possible ports.",
    },
    {
      q: "Which port is used by HTTP (unencrypted web)?",
      options: ["21", "22", "80", "443"],
      answer: 2,
      explain: "Port 80 is HTTP. Port 443 is the encrypted version, HTTPS.",
    },
    {
      q: "Which protocol is considered reliable and ordered?",
      options: ["UDP", "TCP", "ICMP", "ARP"],
      answer: 1,
      explain: "TCP guarantees delivery and order; UDP is fast but best-effort.",
    },
    {
      q: "What is port 22 used for?",
      options: ["FTP", "SSH", "Telnet", "DNS"],
      answer: 1,
      explain: "Port 22 is SSH — secure remote login.",
    },
    {
      q: "Which range contains the well-known ports?",
      options: ["0–1023", "1024–49151", "49152–65535", "0–65535"],
      answer: 0,
      explain: "Well-known ports are 0–1023, reserved for common services.",
    },
    {
      q: "HTTPS uses which port by default?",
      options: ["80", "8080", "443", "8443"],
      answer: 2,
      explain: "Port 443 is the default for HTTPS — encrypted web traffic.",
    },
    {
      q: "In the apartment analogy, the port number represents the…",
      options: ["Building", "Street", "Apartment door", "City"],
      answer: 2,
      explain: "IP = building, port = apartment door, service = person inside.",
    },
    {
      q: "Which protocol does HTTPS use at the transport layer?",
      options: ["UDP", "TCP", "ICMP", "Both equally"],
      answer: 1,
      explain: "Web traffic (HTTP/HTTPS) uses TCP for reliable delivery.",
    },
    {
      q: "How many well-known ports are there?",
      options: ["256", "1024", "49152", "65536"],
      answer: 1,
      explain: "Ports 0–1023 — that's 1,024 well-known ports.",
    },
    {
      q: "Dynamic/private ports start at…",
      options: ["1024", "49152", "5000", "65535"],
      answer: 1,
      explain: "Dynamic ports run from 49,152 to 65,535.",
    },
  ],
  intermediate: [
    {
      q: "Which port is used by SMTP for mail submission with TLS?",
      options: ["25", "465", "587", "110"],
      answer: 2,
      explain: "Port 587 is the modern submission port using STARTTLS.",
    },
    {
      q: "What protocol runs on port 53?",
      options: ["HTTP", "DNS", "DHCP", "SMTP"],
      answer: 1,
      explain: "Port 53 is DNS, used for domain name resolution (TCP and UDP).",
    },
    {
      q: "Which is the secure version of IMAP?",
      options: ["IMAP over port 143", "IMAPS over port 993", "POP3S over 995", "SMTPS over 465"],
      answer: 1,
      explain: "IMAPS runs on port 993 — IMAP over SSL/TLS.",
    },
    {
      q: "Which port does TFTP use?",
      options: ["20", "21", "69", "161"],
      answer: 2,
      explain: "TFTP uses port 69 over UDP — lightweight file transfer.",
    },
    {
      q: "Telnet runs on which port and protocol?",
      options: ["22 / TCP", "23 / TCP", "23 / UDP", "21 / TCP"],
      answer: 1,
      explain: "Telnet uses port 23 over TCP. It is insecure — prefer SSH.",
    },
    {
      q: "Which port is the FTP control channel?",
      options: ["20", "21", "22", "69"],
      answer: 1,
      explain: "Port 21 is FTP control; port 20 is the data channel.",
    },
    {
      q: "POP3S listens on which port?",
      options: ["110", "143", "993", "995"],
      answer: 3,
      explain: "POP3S — secure POP3 — uses port 995.",
    },
    {
      q: "RDP, the Windows remote desktop, uses port…",
      options: ["22", "3389", "1701", "389"],
      answer: 1,
      explain: "RDP uses port 3389 over TCP.",
    },
    {
      q: "Which protocol does TFTP use at the transport layer?",
      options: ["TCP", "UDP", "Both", "Neither"],
      answer: 1,
      explain: "TFTP uses UDP — it's a lightweight protocol, no reliability needed.",
    },
    {
      q: "Which port is commonly used as an alternate HTTP port?",
      options: ["443", "8080", "21", "53"],
      answer: 1,
      explain: "Port 8080 is a common alternate HTTP port for dev/proxy servers.",
    },
  ],
  advanced: [
    {
      q: "DHCP server listens on which port?",
      options: ["67", "68", "53", "161"],
      answer: 0,
      explain: "DHCP server uses port 67 (UDP); the client uses port 68.",
    },
    {
      q: "SNMP uses which two ports?",
      options: ["160/161", "161/162", "67/68", "20/21"],
      answer: 1,
      explain: "SNMP uses 161 for queries and 162 for traps, both over UDP.",
    },
    {
      q: "Which port does LDAP over SSL use?",
      options: ["389", "636", "443", "88"],
      answer: 1,
      explain: "LDAPS — secure LDAP — uses port 636 over TCP.",
    },
    {
      q: "Kerberos authentication uses port…",
      options: ["49", "88", "389", "500"],
      answer: 1,
      explain: "Kerberos uses port 88 (TCP/UDP) for ticket-based auth.",
    },
    {
      q: "Which port does PostgreSQL listen on by default?",
      options: ["1433", "1521", "3306", "5432"],
      answer: 3,
      explain: "PostgreSQL uses port 5432 over TCP.",
    },
    {
      q: "NTP, the time-sync protocol, uses port…",
      options: ["53", "123", "161", "389"],
      answer: 1,
      explain: "NTP uses port 123 over UDP.",
    },
    {
      q: "Which port is used by ISAKMP for VPN key exchange?",
      options: ["500", "1701", "1723", "4500"],
      answer: 0,
      explain: "ISAKMP uses port 500 (UDP) for establishing IPsec SAs.",
    },
    {
      q: "Syslog messages are sent to port…",
      options: ["514", "161", "162", "123"],
      answer: 0,
      explain: "Syslog uses port 514 over UDP for log messages.",
    },
    {
      q: "Redis listens on which port by default?",
      options: ["3306", "6379", "27017", "9200"],
      answer: 1,
      explain: "Redis uses port 6379 over TCP.",
    },
    {
      q: "Which port is considered insecure for VPNs and should be avoided?",
      options: ["500 (ISAKMP)", "1701 (L2TP)", "1723 (PPTP)", "4500 (NAT-T)"],
      answer: 2,
      explain: "PPTP (1723) has known weaknesses — prefer L2TP/IPsec or WireGuard.",
    },
  ],
};

/* ---------- Data: reference table ---------- */
const REFERENCE = [
  { port: 20, name: "FTP Data", proto: "TCP", cat: "File Transfer" },
  { port: 21, name: "FTP Control", proto: "TCP", cat: "File Transfer" },
  { port: 22, name: "SSH", proto: "TCP", cat: "Remote Access" },
  { port: 23, name: "Telnet", proto: "TCP", cat: "Remote Access" },
  { port: 25, name: "SMTP", proto: "TCP", cat: "Email" },
  { port: 49, name: "TACACS+", proto: "TCP", cat: "Security" },
  { port: 53, name: "DNS", proto: "TCP/UDP", cat: "Network" },
  { port: 67, name: "DHCP Server", proto: "UDP", cat: "Network" },
  { port: 68, name: "DHCP Client", proto: "UDP", cat: "Network" },
  { port: 69, name: "TFTP", proto: "UDP", cat: "File Transfer" },
  { port: 80, name: "HTTP", proto: "TCP", cat: "Web" },
  { port: 88, name: "Kerberos", proto: "TCP/UDP", cat: "Security" },
  { port: 110, name: "POP3", proto: "TCP", cat: "Email" },
  { port: 123, name: "NTP", proto: "UDP", cat: "Network" },
  { port: 143, name: "IMAP", proto: "TCP", cat: "Email" },
  { port: 161, name: "SNMP", proto: "UDP", cat: "Network" },
  { port: 162, name: "SNMP Trap", proto: "UDP", cat: "Network" },
  { port: 389, name: "LDAP", proto: "TCP", cat: "Directory" },
  { port: 443, name: "HTTPS", proto: "TCP", cat: "Web" },
  { port: 465, name: "SMTPS", proto: "TCP", cat: "Email" },
  { port: 500, name: "ISAKMP", proto: "UDP", cat: "Security" },
  { port: 514, name: "Syslog", proto: "UDP", cat: "Security" },
  { port: 587, name: "SMTP Submission", proto: "TCP", cat: "Email" },
  { port: 636, name: "LDAPS", proto: "TCP", cat: "Directory" },
  { port: 993, name: "IMAPS", proto: "TCP", cat: "Email" },
  { port: 995, name: "POP3S", proto: "TCP", cat: "Email" },
  { port: 1433, name: "MS SQL Server", proto: "TCP", cat: "Database" },
  { port: 1521, name: "Oracle DB", proto: "TCP", cat: "Database" },
  { port: 1701, name: "L2TP", proto: "UDP", cat: "Security" },
  { port: 1723, name: "PPTP", proto: "TCP", cat: "Security" },
  { port: 3306, name: "MySQL", proto: "TCP", cat: "Database" },
  { port: 3389, name: "RDP", proto: "TCP", cat: "Remote Access" },
  { port: 4500, name: "NAT-T", proto: "UDP", cat: "Security" },
  { port: 5432, name: "PostgreSQL", proto: "TCP", cat: "Database" },
  { port: 6379, name: "Redis", proto: "TCP", cat: "Database" },
  { port: 8080, name: "HTTP Alt", proto: "TCP", cat: "Web" },
  { port: 8443, name: "HTTPS Alt", proto: "TCP", cat: "Web" },
  { port: 9200, name: "Elasticsearch", proto: "TCP", cat: "Database" },
  { port: 27017, name: "MongoDB", proto: "TCP", cat: "Database" },
];

/* =========================================================
   State
   ========================================================= */
const state = {
  view: "home",
  level: "beginner",
  lessonIndex: 0,
  doneLevels: new Set(),
  quiz: {
    level: null,
    questions: [],
    index: 0,
    score: 0,
    answered: false,
    selected: -1,
  },
};

/* =========================================================
   Router / view switching
   ========================================================= */
function go(view) {
  if (view === state.view) return;
  const overlay = document.getElementById("pageTransition");
  overlay.classList.add("is-on");
  setTimeout(() => {
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("is-active"));
    const next = document.getElementById("view-" + view);
    if (next) next.classList.add("is-active");
    state.view = view;
    // re-trigger entrance animation
    if (next) {
      next.style.animation = "none";
      void next.offsetWidth;
      next.style.animation = "";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    overlay.classList.remove("is-on");
    // close mobile menu
    document.querySelectorAll(".nav__links").forEach((n) => n.classList.remove("is-open"));
  }, 280);
}

/* =========================================================
   Top progress bar (overall across levels)
   ========================================================= */
function updateTopProgress() {
  const total = Object.keys(LEVELS).length;
  const done = state.doneLevels.size;
  const pct = (done / total) * 100;
  document.getElementById("topProgressFill").style.width = pct + "%";
}

/* =========================================================
   Learn view
   ========================================================= */
function renderLevelCards() {
  const wrap = document.getElementById("levelCards");
  wrap.innerHTML = "";
  Object.entries(LEVELS).forEach(([key, lvl]) => {
    const card = document.createElement("button");
    card.className = "level-card" + (key === state.level ? " is-active" : "");
    card.dataset.level = key;
    if (state.doneLevels.has(key)) card.classList.add("is-done");
    card.innerHTML = `
      <div class="level-card__icon"><i class="fa-solid ${lvl.icon}"></i></div>
      <div>
        <div class="level-card__title">${lvl.label}</div>
        <div class="level-card__sub">${lvl.sub}</div>
      </div>
      <i class="fa-solid fa-circle-check level-card__check"></i>
    `;
    card.addEventListener("click", () => {
      state.level = key;
      state.lessonIndex = 0;
      renderLevelCards();
      renderLesson();
    });
    wrap.appendChild(card);
  });
}

function renderLesson() {
  const lvl = LEVELS[state.level];
  const lessons = lvl.lessons;
  const idx = state.lessonIndex;
  const lesson = lessons[idx];

  document.getElementById("lessonLevelTag").textContent = lvl.label;
  document.getElementById("lessonTitle").textContent = lesson.title;
  const body = document.getElementById("lessonBody");
  body.innerHTML = lesson.body;
  // animate body in
  body.style.animation = "none";
  void body.offsetWidth;
  body.style.animation = "viewIn 0.45s var(--ease) both";

  // progress
  const pct = ((idx + 1) / lessons.length) * 100;
  document.getElementById("lessonProgressFill").style.width = pct + "%";
  document.getElementById("lessonProgressText").textContent =
    `${idx + 1} / ${lessons.length}`;
  document.getElementById("lessonCounter").textContent = `${idx + 1} / ${lessons.length}`;

  // buttons
  document.getElementById("prevBtn").disabled = idx === 0;
  const nextBtn = document.getElementById("nextBtn");
  if (idx === lessons.length - 1) {
    nextBtn.innerHTML = `<i class="fa-solid fa-check"></i> Finish`;
  } else {
    nextBtn.innerHTML = `Next <i class="fa-solid fa-arrow-right"></i>`;
  }
}

function lessonNext() {
  const lessons = LEVELS[state.level].lessons;
  if (state.lessonIndex < lessons.length - 1) {
    state.lessonIndex++;
    renderLesson();
  } else {
    // finished level
    state.doneLevels.add(state.level);
    renderLevelCards();
    updateTopProgress();
    // small celebratory toast
    showToast(`You finished the ${LEVELS[state.level].label} track! 🎉`);
    // suggest quiz
    setTimeout(() => go("quiz"), 700);
  }
}

function lessonPrev() {
  if (state.lessonIndex > 0) {
    state.lessonIndex--;
    renderLesson();
  }
}

/* =========================================================
   Quiz view
   ========================================================= */
function startQuiz(level) {
  const pool = QUIZZES[level];
  // shuffle a copy and take 10 (all of them, but order randomized)
  const questions = [...pool].sort(() => Math.random() - 0.5);
  state.quiz = {
    level,
    questions,
    index: 0,
    score: 0,
    answered: false,
    selected: -1,
  };
  document.getElementById("quizLevelTag").textContent = LEVELS[level].label;
  showQuizScreen("quizActive");
  renderQuestion();
}

function showQuizScreen(name) {
  document.querySelectorAll(".quiz-screen").forEach((s) => s.classList.remove("is-active"));
  document.getElementById(name).classList.add("is-active");
}

function renderQuestion() {
  const q = state.quiz.questions[state.quiz.index];
  document.getElementById("quizCount").textContent =
    `Question ${state.quiz.index + 1} of ${state.quiz.questions.length}`;
  document.getElementById("quizQuestion").textContent = q.q;

  const pct = (state.quiz.index / state.quiz.questions.length) * 100;
  document.getElementById("quizProgressFill").style.width = pct + "%";

  const optsWrap = document.getElementById("quizOptions");
  optsWrap.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerHTML = `
      <span class="quiz-option__key">${String.fromCharCode(65 + i)}</span>
      <span>${opt}</span>
    `;
    btn.addEventListener("click", () => answerQuestion(i));
    optsWrap.appendChild(btn);
  });

  const feedback = document.getElementById("quizFeedback");
  feedback.hidden = true;
  feedback.className = "quiz__feedback";
  document.getElementById("quizNextBtn").disabled = true;
  state.quiz.answered = false;
  state.quiz.selected = -1;
}

function answerQuestion(choice) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;
  state.quiz.selected = choice;
  const q = state.quiz.questions[state.quiz.index];
  const correct = choice === q.answer;

  const opts = document.querySelectorAll(".quiz-option");
  opts.forEach((o, i) => {
    o.classList.add("is-locked");
    if (i === q.answer) o.classList.add("is-correct");
    if (i === choice && !correct) o.classList.add("is-wrong");
  });

  if (correct) state.quiz.score++;

  const feedback = document.getElementById("quizFeedback");
  feedback.hidden = false;
  feedback.classList.add(correct ? "is-correct" : "is-wrong");
  feedback.querySelector("i").className = correct
    ? "fa-solid fa-circle-check"
    : "fa-solid fa-circle-xmark";
  document.getElementById("quizFeedbackText").textContent =
    (correct ? "Correct! " : "Not quite. ") + q.explain;

  // update progress to include current
  const pct = ((state.quiz.index + 1) / state.quiz.questions.length) * 100;
  document.getElementById("quizProgressFill").style.width = pct + "%";

  const nextBtn = document.getElementById("quizNextBtn");
  nextBtn.disabled = false;
  nextBtn.innerHTML =
    state.quiz.index === state.quiz.questions.length - 1
      ? `See results <i class="fa-solid fa-flag-checkered"></i>`
      : `Next <i class="fa-solid fa-arrow-right"></i>`;
}

function quizNext() {
  if (!state.quiz.answered) return;
  if (state.quiz.index < state.quiz.questions.length - 1) {
    state.quiz.index++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const total = state.quiz.questions.length;
  const score = state.quiz.score;
  const pct = Math.round((score / total) * 100);

  document.getElementById("resultScore").textContent = pct + "%";
  const ring = document.getElementById("resultRing");
  ring.style.background = `conic-gradient(var(--primary) ${(pct / 100) * 360}deg, var(--bg-soft) 0deg)`;

  let title, msg;
  if (pct === 100) {
    title = "Perfect score!";
    msg = "You answered every question correctly. Outstanding!";
  } else if (pct >= 70) {
    title = "Great job!";
    msg = `You answered ${score} out of ${total} correctly. Solid work.`;
  } else if (pct >= 40) {
    title = "Good effort";
    msg = `You answered ${score} out of ${total}. Review the lessons and try again.`;
  } else {
    title = "Keep practicing";
    msg = `You answered ${score} out of ${total}. Don't worry — revisit the lessons and retry.`;
  }
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultMessage").textContent = msg;

  document.getElementById("resultStats").innerHTML = `
    <div class="result-stat">
      <div class="result-stat__num result-stat__num--ok">${score}</div>
      <div class="result-stat__label">Correct</div>
    </div>
    <div class="result-stat">
      <div class="result-stat__num result-stat__num--bad">${total - score}</div>
      <div class="result-stat__label">Wrong</div>
    </div>
    <div class="result-stat">
      <div class="result-stat__num">${pct}%</div>
      <div class="result-stat__label">Score</div>
    </div>
  `;

  showQuizScreen("quizResult");
}

/* =========================================================
   Reference view
   ========================================================= */
function renderReference(filter = "") {
  const wrap = document.getElementById("refTable");
  const f = filter.trim().toLowerCase();
  const items = REFERENCE.filter((r) => {
    if (!f) return true;
    return (
      String(r.port).includes(f) ||
      r.name.toLowerCase().includes(f) ||
      r.proto.toLowerCase().includes(f) ||
      r.cat.toLowerCase().includes(f)
    );
  });
  if (items.length === 0) {
    wrap.innerHTML = `<div class="ref-empty"><i class="fa-solid fa-magnifying-glass"></i> No ports match "${filter}"</div>`;
    return;
  }
  wrap.innerHTML = items
    .map(
      (r) => `
      <div class="ref-card">
        <div class="ref-card__num">${r.port}</div>
        <div class="ref-card__name">${r.name}</div>
        <div class="ref-card__row">
          <span class="ref-card__tag">${r.proto}</span>
          <span>${r.cat}</span>
        </div>
      </div>
    `
    )
    .join("");
}

/* =========================================================
   Toast
   ========================================================= */
function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.style.cssText = `
      position:fixed; left:50%; bottom:32px; transform:translateX(-50%) translateY(20px);
      background: var(--text); color:#fff; padding:14px 22px; border-radius:999px;
      font-weight:600; font-size:0.95rem; box-shadow: var(--shadow-lg);
      opacity:0; transition: all .35s var(--ease); z-index:300; pointer-events:none;
    `;
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(() => {
    t.style.opacity = "1";
    t.style.transform = "translateX(-50%) translateY(0)";
  });
  clearTimeout(t._timer);
  t._timer = setTimeout(() => {
    t.style.opacity = "0";
    t.style.transform = "translateX(-50%) translateY(20px)";
  }, 2600);
}

/* =========================================================
   Wire up events
   ========================================================= */
function setupNav() {
  // data-go links
  document.querySelectorAll("[data-go]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      go(el.dataset.go);
    });
  });
  // mobile toggles (one per view's nav)
  document.querySelectorAll(".nav__toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const links = btn.parentElement.querySelector(".nav__links");
      const open = links.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open);
      btn.innerHTML = open
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
  });
  // close menu when a link is clicked
  document.querySelectorAll(".nav__links a").forEach((a) => {
    a.addEventListener("click", () => {
      const links = a.closest(".nav__links");
      if (links) links.classList.remove("is-open");
      const btn = a.closest(".nav").querySelector(".nav__toggle");
      if (btn) {
        btn.setAttribute("aria-expanded", "false");
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
  });
}

function setupLearn() {
  document.getElementById("prevBtn").addEventListener("click", lessonPrev);
  document.getElementById("nextBtn").addEventListener("click", lessonNext);
  // keyboard nav
  document.addEventListener("keydown", (e) => {
    if (state.view !== "learn") return;
    if (e.key === "ArrowRight") lessonNext();
    if (e.key === "ArrowLeft") lessonPrev();
  });
}

function setupQuiz() {
  document.querySelectorAll(".level-pill").forEach((btn) => {
    btn.addEventListener("click", () => startQuiz(btn.dataset.level));
  });
  document.getElementById("quizNextBtn").addEventListener("click", quizNext);
  document.getElementById("retryBtn").addEventListener("click", () => {
    showQuizScreen("quizStart");
  });
}

function setupReference() {
  const input = document.getElementById("refSearch");
  input.addEventListener("input", () => renderReference(input.value));
}

/* =========================================================
   Init
   ========================================================= */
function init() {
  setupNav();
  setupLearn();
  setupQuiz();
  setupReference();
  renderLevelCards();
  renderLesson();
  renderReference();
  updateTopProgress();
}
document.addEventListener("DOMContentLoaded", init);
