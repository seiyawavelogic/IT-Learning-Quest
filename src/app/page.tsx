export default function Home() {
    return (
        <main>
            <h1>
                IT lerning quest
            </h1>
            <p>
                開発環境動作中
            </p>
        </main>
    )
}

// page.tsx は app/ に置く必要があります
// Next.js はファイルの置き場所でルーティングを自動生成する仕組みです。
// src/app/page.tsx          → localhost:3000/
// src/app/about/page.tsx    → localhost:3000/about
// src/app/users/page.tsx    → localhost:3000/users

//   ---
//   components/ との役割の違い

//   // src/app/page.tsx（ルーティング層）
//   // 「どのコンポーネントを表示するか」だけを担う
//   import { HeroSection } from '@/components/ui/HeroSection'

//   export default function Home() {
//     return <HeroSection />   // ← 実際のUIはcomponentsに切り出す
//   }

//   // src/components/ui/HeroSection.tsx（UI層）
//   // 実際の見た目の実装はここに書く
//   export function HeroSection() {
//     return (
//       <main>
//         <h1>IT Learning Quest</h1>
//       </main>
//     )
//   }