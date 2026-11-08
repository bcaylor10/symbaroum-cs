import { Container } from '@/components/layout/Container';

export default function NotFound() {
  return (
    <Container>
      <div class={'flex items-center justify-center'}>
        <figure class="mb-10 w-full max-w-xl shrink-0 overflow-hidden rounded-box shadow-2xl ring-1 ring-primary/30">
          <svg
            viewBox="0 0 600 400"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="A wanderer with a lantern stands before ancient ruins in the Davokar forest; the arch glows with the number 404"
            class="block h-auto w-full"
          >
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#050b12" />
                <stop offset=".55" stop-color="#0d2a22" />
                <stop offset="1" stop-color="#1c4a37" />
              </linearGradient>
              <radialGradient id="moonGlow">
                <stop offset="0" stop-color="#bff5d4" stop-opacity=".55" />
                <stop offset="1" stop-color="#bff5d4" stop-opacity="0" />
              </radialGradient>
              <linearGradient id="portal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#7dffb4" stop-opacity=".75" />
                <stop offset="1" stop-color="#14663f" stop-opacity=".25" />
              </linearGradient>
              <radialGradient id="portalHalo">
                <stop offset="0" stop-color="#6dffaa" stop-opacity=".45" />
                <stop offset="1" stop-color="#6dffaa" stop-opacity="0" />
              </radialGradient>
              <linearGradient id="stone" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stop-color="#2b3a34" />
                <stop offset=".5" stop-color="#1b2823" />
                <stop offset="1" stop-color="#101a16" />
              </linearGradient>
              <radialGradient id="vignette" cx=".5" cy=".55" r=".75">
                <stop offset=".55" stop-color="#000" stop-opacity="0" />
                <stop offset="1" stop-color="#000" stop-opacity=".6" />
              </radialGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="blur8">
                <feGaussianBlur stdDeviation="8" />
              </filter>

              <path
                id="treeline"
                d="M0 400 V270 L10 240 L20 270 L32 225 L44 270 L56 245 L66 270 L80 215 L94 270 L106 238 L118 272 L130 230 L142 270 L156 248 L168 272 L180 222 L194 272 L206 244 L218 272 L232 236 L246 272 L258 250 L270 274 L284 228 L298 274 L312 246 L324 274 L338 218 L352 274 L366 242 L378 274 L392 232 L406 274 L418 250 L430 274 L444 224 L458 274 L470 246 L482 274 L496 234 L510 274 L522 252 L534 274 L548 220 L562 274 L574 244 L588 274 L600 238 V400 Z"
              />
            </defs>

            <rect width="600" height="400" fill="url(#sky)" />

            <g fill="#e8fff1">
              <circle cx="48" cy="38" r="1.2" opacity=".8" />
              <circle cx="110" cy="70" r="1" opacity=".6" />
              <circle cx="170" cy="28" r="1.4" opacity=".9" />
              <circle cx="236" cy="62" r="1" opacity=".5" />
              <circle cx="300" cy="24" r="1.2" opacity=".7" />
              <circle cx="352" cy="80" r="1" opacity=".5" />
              <circle cx="408" cy="40" r="1.3" opacity=".8" />
              <circle cx="540" cy="54" r="1.2" opacity=".7" />
              <circle cx="572" cy="118" r="1" opacity=".5" />
              <circle cx="20" cy="116" r="1" opacity=".5" />
              <circle cx="136" cy="120" r="1.1" opacity=".6" />
              <circle cx="268" cy="108" r="1" opacity=".4" />
            </g>

            <circle cx="470" cy="96" r="84" fill="url(#moonGlow)" />
            <circle cx="470" cy="96" r="34" fill="#dff7e8" />
            <circle cx="458" cy="88" r="6" fill="#b9dcc6" opacity=".6" />
            <circle cx="482" cy="108" r="4" fill="#b9dcc6" opacity=".5" />
            <circle cx="476" cy="82" r="2.5" fill="#b9dcc6" opacity=".5" />

            <use href="#treeline" fill="#12342a" opacity=".9" />
            <use
              href="#treeline"
              fill="#0c241c"
              transform="translate(-16 34) scale(1.06 1)"
            />
            <use
              href="#treeline"
              fill="#071710"
              transform="translate(10 66) scale(.98 1)"
            />

            <g filter="url(#blur8)" fill="#c3ecd5">
              <ellipse
                class="mist"
                cx="170"
                cy="318"
                rx="140"
                ry="12"
                opacity=".13"
              />
              <ellipse
                class="mist"
                cx="450"
                cy="332"
                rx="150"
                ry="10"
                opacity=".11"
                style="animation-delay:-6s"
              />
            </g>

            <path
              d="M0 340 Q150 320 300 336 T600 330 V400 H0 Z"
              fill="#06110b"
            />

            <path
              d="M236 400 C262 378 286 362 276 346 C270 338 268 334 268 330 L332 330 C332 336 334 340 342 346 C362 360 340 384 372 400 Z"
              fill="#244535"
              opacity=".85"
            />
            <path
              d="M304 400 C296 380 310 366 306 348 C304 340 302 336 300 330"
              fill="none"
              stroke="#5fb88a"
              stroke-width="2"
              stroke-dasharray="2 9"
              stroke-linecap="round"
              opacity=".5"
            />

            <ellipse
              cx="300"
              cy="260"
              rx="130"
              ry="110"
              fill="url(#portalHalo)"
              class="portal"
            />

            <g>
              <path
                d="M250 330 V230 A50 50 0 0 1 350 230 V330 Z"
                fill="url(#portal)"
                class="portal"
              />

              <rect
                x="216"
                y="230"
                width="34"
                height="100"
                fill="url(#stone)"
                stroke="#0a120f"
                stroke-width="1.5"
              />
              <rect
                x="350"
                y="230"
                width="34"
                height="100"
                fill="url(#stone)"
                stroke="#0a120f"
                stroke-width="1.5"
              />
              <rect x="210" y="324" width="46" height="10" fill="#141f1a" />
              <rect x="344" y="324" width="46" height="10" fill="#141f1a" />
              <path
                d="M216 230 A84 84 0 0 1 384 230 L350 230 A50 50 0 0 0 250 230 Z"
                fill="url(#stone)"
                stroke="#0a120f"
                stroke-width="1.5"
              />
              <path
                d="M287 150 L313 150 L309 166 L291 166 Z"
                fill="#26362f"
                stroke="#0a120f"
                stroke-width="1.2"
              />

              <g stroke="#070e0b" stroke-width="1.2" fill="none" opacity=".8">
                <path d="M232 244 l6 14 -4 10 7 16" />
                <path d="M372 262 l-5 12 6 10 -4 14" />
                <path d="M330 168 l-6 10 5 8" />
                <path d="M258 176 l8 6 -3 8" />
              </g>

              <g fill="#2f7a52" opacity=".75">
                <ellipse cx="233" cy="231" rx="14" ry="3.5" />
                <ellipse cx="367" cy="231" rx="14" ry="3.5" />
                <ellipse cx="226" cy="326" rx="12" ry="3" />
                <ellipse cx="374" cy="326" rx="12" ry="3" />
                <ellipse
                  cx="256"
                  cy="168"
                  rx="10"
                  ry="2.6"
                  transform="rotate(-38 256 168)"
                />
              </g>

              <g
                stroke="#7dffb4"
                stroke-width="1.8"
                stroke-linecap="round"
                fill="none"
                filter="url(#glow)"
              >
                <g class="rune">
                  <path d="M233 256 v20 M233 262 l8 -7 M233 270 l8 -7" />
                </g>
                <g class="rune" style="animation-delay:-1.2s">
                  <path d="M226 290 l7 8 7 -8 M233 298 v14" />
                </g>
                <g class="rune" style="animation-delay:-2.4s">
                  <path d="M367 256 v20 M367 258 l-8 7 M367 266 l-8 7" />
                </g>
                <g class="rune" style="animation-delay:-.6s">
                  <path d="M360 292 h14 M367 292 v20 M360 304 l7 -6 7 6" />
                </g>
              </g>

              <text
                x="300"
                y="272"
                text-anchor="middle"
                class="font-rune"
                font-size="46"
                font-weight="700"
                fill="#e2ffee"
                filter="url(#glow)"
                letter-spacing="2"
              >
                404
              </text>
            </g>

            <g>
              <circle
                cx="318"
                cy="378"
                r="14"
                fill="#ffd27a"
                opacity=".25"
                filter="url(#blur8)"
              />
              <path
                d="M293 394 L298 368 Q300 361 303 368 L309 394 Z"
                fill="#040a07"
              />
              <circle cx="300.5" cy="362" r="4.2" fill="#040a07" />
              <path d="M296 360 Q300.5 354 305 360 Z" fill="#040a07" />
              <path
                d="M308 372 L316 376"
                stroke="#040a07"
                stroke-width="1.6"
                stroke-linecap="round"
              />
              <rect
                x="314.5"
                y="376"
                width="5"
                height="6.5"
                rx="1"
                fill="#ffd88a"
                filter="url(#glow)"
              />
            </g>

            <g stroke="#030806" fill="none" stroke-linecap="round">
              <g>
                <path
                  d="M52 400 C56 340 36 300 58 250 C66 228 48 206 60 176"
                  stroke-width="16"
                />
                <path d="M58 250 C84 238 100 214 98 188" stroke-width="8" />
                <path d="M54 292 C26 280 14 258 16 232" stroke-width="7" />
                <path d="M60 176 C72 160 70 146 82 134" stroke-width="5" />
                <path d="M98 188 C104 176 116 172 122 160" stroke-width="4" />
                <path d="M16 232 C12 220 18 210 12 198" stroke-width="3.5" />
              </g>
              <g transform="translate(600 10) scale(-1 .96)">
                <path
                  d="M44 400 C48 346 30 312 52 262 C62 238 44 218 56 190"
                  stroke-width="15"
                />
                <path d="M52 262 C80 250 92 226 90 202" stroke-width="7" />
                <path d="M48 304 C24 294 12 272 16 248" stroke-width="6" />
                <path d="M56 190 C68 174 64 160 78 148" stroke-width="4.5" />
                <path d="M90 202 C96 190 108 186 112 172" stroke-width="3.5" />
              </g>
            </g>

            <g fill="#a8ffcb" filter="url(#glow)">
              <circle
                class="wisp"
                cx="190"
                cy="300"
                r="2.6"
                style="--dx:10px;--dy:-14px"
              />
              <circle
                class="wisp"
                cx="420"
                cy="286"
                r="2.2"
                style="--dx:-8px;--dy:-10px;animation-delay:-1.8s;animation-duration:6.2s"
              />
              <circle
                class="wisp"
                cx="150"
                cy="260"
                r="1.8"
                style="--dx:6px;--dy:-16px;animation-delay:-3s;animation-duration:7s"
              />
              <circle
                class="wisp"
                cx="470"
                cy="318"
                r="2.4"
                style="--dx:-12px;--dy:-8px;animation-delay:-.8s;animation-duration:5.4s"
              />
              <circle
                class="wisp"
                cx="360"
                cy="212"
                r="1.6"
                style="--dx:8px;--dy:-10px;animation-delay:-2.4s;animation-duration:6.8s"
              />
            </g>

            <rect width="600" height="400" fill="url(#vignette)" />
          </svg>
        </figure>
      </div>
      <h1 class={'text-7xl font-bold mb-5'}>Page Not Found</h1>
      <h2 class={'text-3xl'}>
        The page you're looking for is not here. Clearly you rolled a 20.
      </h2>
    </Container>
  );
}
