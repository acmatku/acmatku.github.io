import { useEffect, useState } from "react";

const bold = { fontWeight: 600 } as const;

const rectStyle = {
  display: "inline",
  fill: "none",
  stroke: "#dcdfe4",
  strokeWidth: 0.529167,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeDasharray: "none",
  strokeOpacity: 1,
} as const;

const textStyle = {
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  fontStretch: "normal",
  fontSize: "11.9826px",
  lineHeight: "normal",
  fontFamily: "'FiraCode', 'Courier New', Courier, monospace",
  fontVariantLigatures: "normal",
  fontVariantPosition: "normal",
  fontVariantCaps: "normal",
  fontVariantNumeric: "normal",
  fontVariantAlternates: "normal",
  fontVariantEastAsian: "normal",
  fontFeatureSettings: "normal",
  fontVariationSettings: "normal",
  textIndent: 0,
  textAlign: "start",
  textDecorationLine: "none",
  textDecorationStyle: "solid",
  textDecorationColor: "#000000",
  letterSpacing: "normal",
  wordSpacing: "normal",
  textTransform: "none",
  writingMode: "lr-tb",
  direction: "ltr",
  textOrientation: "mixed",
  dominantBaseline: "auto",
  baselineShift: "baseline",
  whiteSpace: "pre",
  shapeInside: "url(#rect27)",
  display: "inline",
  opacity: 1,
  color: "#dcdfe4",
  fill: "#dcdfe4",
  fillOpacity: 1,
  stroke: "none",
  strokeWidth: 0.433515,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  strokeDasharray: "none",
  strokeDashoffset: 0,
  strokeOpacity: 1,
} as const;

const ACM_START_DATE = new Date("January 01, 2012")
const MEMBER_COUNT = 154

function updateTimeDelta() {

  const timeDelta = new Date().getTime() - ACM_START_DATE.getTime();

  const days = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDelta / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDelta / (1000 * 60)) % 60);
  const seconds = Math.floor((timeDelta / 1000) % 60);

  return `${days} days, ${hours} hours, ${minutes} min, ${seconds} sec`;
}

function NeofetchHeader() {
  const [uptime, setUptime] = useState<string>(updateTimeDelta());

  useEffect(() => {
    setTimeout(() => setUptime(updateTimeDelta()), 1000)
  })

  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 507.99998 285.74999"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto rounded-md w-full">
      <defs id="defs1">
        <rect
          x="98.703579"
          y="112.41241"
          width="936.16308"
          height="501.57893"
          id="rect27" />
        <rect
          x="76.76945"
          y="79.511216"
          width="1767.0682"
          height="937.684"
          id="rect3" />
      </defs>
      <rect
        style={rectStyle}
        id="rect2"
        width="480.07111"
        height="261.08554"
        x="14.200348"
        y="14.081147"
        ry="6.0754418" />
      <text
        xmlSpace="preserve"
        transform="matrix(0.52487574,0,0,0.52487574,-30.932153,-37.90803)"
        id="text27"
        style={textStyle}>
        <tspan x="98.703125" y="122.89688" id="tspan10">
          <tspan style={{ fill: "#c678dd" }} id="tspan2">root</tspan>
          <tspan style={{ fill: "#61afef" }} id="tspan3">@</tspan>
          <tspan style={{ fill: "#c678dd" }} id="tspan4">kuacm.club</tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan5">:</tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan6">~</tspan>
          <tspan style={bold} id="tspan7"> </tspan>
          <tspan style={{ fill: "#56b6c2" }} id="tspan8">$</tspan>
          <tspan style={bold} id="tspan9"> neofetch
          </tspan>
        </tspan>
        <tspan x="98.703125" y="137.87513" id="tspan18">
          <tspan style={bold} id="tspan11">                                   </tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan12">%</tspan>
          <tspan style={bold} id="tspan13">                                </tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan14">root</tspan>
          <tspan style={bold} id="tspan15">@</tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan16">kuacm.club</tspan>
          <tspan style={bold} id="tspan17">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="152.85338" id="tspan22">
          <tspan style={bold} id="tspan19">                                 </tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan20">%%%%%</tspan>
          <tspan style={bold} id="tspan21">                              ---------------------
          </tspan>
        </tspan>
        <tspan x="98.703125" y="167.83164" id="tspan28">
          <tspan style={bold} id="tspan23">                               </tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan24">%%%%%%%%%</tspan>
          <tspan style={bold} id="tspan25">                            </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan26">OS</tspan>
          <tspan style={bold} id="tspan27">: ACM Linux From Scratch arm64
          </tspan>
        </tspan>
        <tspan x="98.703125" y="182.80989" id="tspan34">
          <tspan style={bold} id="tspan29">                             </tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan30">%%%%%%%%%%%%%</tspan>
          <tspan style={bold} id="tspan31">                          </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan32">Kernel</tspan>
          <tspan style={bold} id="tspan33">: 4.3.25
          </tspan>
        </tspan>
        <tspan x="98.703125" y="197.78815" id="tspan83">
          <tspan style={bold} id="tspan35">                            </tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan50">%%%%%%    %%%%%%</tspan>
          <tspan style={bold} id="tspan52">                        </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan79">Uptime</tspan>
          <tspan style={bold} id="tspan82">: {uptime}
          </tspan>
        </tspan>
        <tspan x="98.703125" y="212.76641" id="tspan90">
          <tspan style={bold} id="tspan84">                          </tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan85">%%%%%%       %%%%%%</tspan>
          <tspan style={bold} id="tspan86">                       </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan88">Packages</tspan>
          <tspan style={bold} id="tspan89">: {MEMBER_COUNT}
          </tspan>
        </tspan>
        <tspan x="98.703125" y="227.74466" id="tspan96">
          <tspan style={bold} id="tspan91">                        </tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan92">%%%%%%           %%%%%%</tspan>
          <tspan style={bold} id="tspan93">                     </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan94">Shell</tspan>
          <tspan style={bold} id="tspan95">: eecsh 5.1.16
          </tspan>
        </tspan>
        <tspan x="98.703125" y="242.72292" id="tspan102">
          <tspan style={bold} id="tspan97">                      </tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan98">%%%%%%               %%%%%%</tspan>
          <tspan style={bold} id="tspan99">                   </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan100">Theme</tspan>
          <tspan style={bold} id="tspan101">: ACM@KU-22
          </tspan>
        </tspan>
        <tspan x="98.703125" y="257.70118" id="tspan108">
          <tspan style={bold} id="tspan103">                    </tspan>
          <tspan style={{ fill: "#e06c75" }} id="tspan104">%%%%%% </tspan>
          <tspan style={bold} id="tspan105">                                         </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan106">Icons</tspan>
          <tspan style={bold} id="tspan107">: ACM@KU-22
          </tspan>
        </tspan>
        <tspan x="98.703125" y="272.67942" id="tspan114">
          <tspan style={bold} id="tspan109">                                               </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan110">;;;;;;</tspan>
          <tspan style={bold} id="tspan111">               </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan112">Terminal</tspan>
          <tspan style={bold} id="tspan113">: Eaton-LEEP2 Terminal
          </tspan>
        </tspan>
        <tspan x="98.703125" y="287.65766" id="tspan120">
          <tspan style={bold} id="tspan115">                                                 </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan116">;;;;;;</tspan>
          <tspan style={bold} id="tspan117">             </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan118">CPU</tspan>
          <tspan style={bold} id="tspan119">: KU ACM1
          </tspan>
        </tspan>
        <tspan x="98.703125" y="302.6359" id="tspan126">
          <tspan style={bold} id="tspan121">  @@@@@@@@@       @@@@@@@  @@@@ @@@@@  @@@@@@     </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan122">;;;;;;</tspan>
          <tspan style={bold} id="tspan123">            </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan124">GPU</tspan>
          <tspan style={bold} id="tspan125">: KU ACM1
          </tspan>
        </tspan>
        <tspan x="98.703125" y="317.61414" id="tspan132">
          <tspan style={bold} id="tspan127">  @@@@@@@@@@    @@@@@@@@@  @@@@@@@@@@@@@@@@@@@      </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan128">;;;;;;</tspan>
          <tspan style={bold} id="tspan129">          </tspan>
          <tspan style={{ fill: "#98c379" }} id="tspan130">Memory</tspan>
          <tspan style={bold} id="tspan131">: 2961MiB / 16384MiB
          </tspan>
        </tspan>
        <tspan x="98.703125" y="332.59238" id="tspan136">
          <tspan style={bold} id="tspan133">      @@@@@@@  @@@@@       @@@@    @@@@   @@@@        </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan134">;;;;;;</tspan>
          <tspan style={bold} id="tspan135">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="347.57062" id="tspan140">
          <tspan style={bold} id="tspan137">  @@@@@@@@@@@  @@@@        @@@@    @@@@    @@@          </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan138">;;;;;;</tspan>
          <tspan style={bold} id="tspan139">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="362.54886" id="tspan144">
          <tspan style={bold} id="tspan141"> @@@@    @@@@  @@@@        @@@@    @@@@    @@@            </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan142">;;;;;;</tspan>
          <tspan style={bold} id="tspan143">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="377.5271" id="tspan148">
          <tspan style={bold} id="tspan145"> @@@@@  @@@@@   @@@@@@@@@  @@@@    @@@@    @@@          </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan146">;;;;;;</tspan>
          <tspan style={bold} id="tspan147">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="392.50534" id="tspan152">
          <tspan style={bold} id="tspan149">  @@@@@@@@@@@    @@@@@@@@  @@@@    @@@@    @@@        </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan150">;;;;;;</tspan>
          <tspan style={bold} id="tspan151">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="407.48359" id="tspan156">
          <tspan style={bold} id="tspan153">                                                    </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan154">;;;;;;</tspan>
          <tspan style={bold} id="tspan155">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="422.46183" id="tspan162">
          <tspan style={bold} id="tspan157">            </tspan>
          <tspan style={{ fill: "#5a6374" }} id="tspan158">UNIVERSITY  OF  KANSAS</tspan>
          <tspan style={bold} id="tspan159">                </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan160">;;;;;;</tspan>
          <tspan style={bold} id="tspan161">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="437.44007" id="tspan166">
          <tspan style={bold} id="tspan163">                                                 </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan164">;;;;;;</tspan>
          <tspan style={bold} id="tspan165">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="452.41831" id="tspan170">
          <tspan style={bold} id="tspan167">                                               </tspan>
          <tspan style={{ fill: "#e5c07b" }} id="tspan168">;;;;;;</tspan>
          <tspan style={bold} id="tspan169">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="467.39655" id="tspan173">
          <tspan style={bold} id="tspan171">                   </tspan>
          <tspan style={{ fill: "#61afef" }} id="tspan172"> ######
          </tspan>
        </tspan>
        <tspan x="98.703125" y="482.37479" id="tspan175">
          <tspan style={{ fill: "#61afef" }} id="tspan174">                      ######               ######
          </tspan>
        </tspan>
        <tspan x="98.703125" y="497.35303" id="tspan177">
          <tspan style={{ fill: "#61afef" }} id="tspan176">                        ######           ######
          </tspan>
        </tspan>
        <tspan x="98.703125" y="512.33127" id="tspan179">
          <tspan style={{ fill: "#61afef" }} id="tspan178">                          ######       ######
          </tspan>
        </tspan>
        <tspan x="98.703125" y="527.30954" id="tspan181">
          <tspan style={{ fill: "#61afef" }} id="tspan180">                            ######    ######
          </tspan>
        </tspan>
        <tspan x="98.703125" y="542.28781" id="tspan183">
          <tspan style={{ fill: "#61afef" }} id="tspan182">                             #############
          </tspan>
        </tspan>
        <tspan x="98.703125" y="557.26609" id="tspan185">
          <tspan style={{ fill: "#61afef" }} id="tspan184">                               #########
          </tspan>
        </tspan>
        <tspan x="98.703125" y="572.24436" id="tspan188">
          <tspan style={{ fill: "#61afef" }} id="tspan186">                                 #####</tspan>
          <tspan style={bold} id="tspan187">
          </tspan>
        </tspan>
        <tspan x="98.703125" y="587.22263" id="tspan191">
          <tspan style={bold} id="tspan189">                                   </tspan>
          <tspan style={{ fill: "#61afef" }} id="tspan190">#</tspan>
        </tspan>
      </text>
    </svg>
  )
}

export default NeofetchHeader;
