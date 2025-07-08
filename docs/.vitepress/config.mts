import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SFAC 자료모음',
  description: '매뉴얼 & 규정집을 한 곳에',
  base: '/NEWTEST/',

  themeConfig: {
    nav: [
      { text: '매뉴얼',    link: '/manual/' },
      { text: '규정집',    link: '/regulation/' }
    ],

    sidebar: {
      '/manual/': [
        {
          text: '매뉴얼',
          items: [
            { text: '아카이브 시스템 매뉴얼',             link: '/manual/1._아카이브_시스템_매뉴얼' },
            { text: '규정 제·개정 매뉴얼',               link: '/manual/2._규정_제·개정_매뉴얼' },
            { text: '회계매뉴얼',                         link: '/NEWTEST/manual/3-1._회계매뉴얼' },
            { text: '수익사업 매뉴얼',                   link: '/NEWTEST/manual/3-2._수익사업_매뉴얼' },
            { text: '복무근태 매뉴얼',                   link: '/NEWTEST/manual/4-1._복무근태_매뉴얼' },
            { text: '난임치료휴가 운영지침',             link: '/NEWTEST/manual/4-2._난임치료휴가_운영지침' },
            { text: '육아시간 사용지침',                 link: '/NEWTEST/manual/4-3._육아시간_사용지침' },
            { text: '장기재직자 재충전휴가 사용지침',     link: '/NEWTEST/manual/4-4._장기재직자_재충전휴가_사용지침' },
            { text: '원천징수 신고 매뉴얼',               link: '/NEWTEST/manual/5-1._원천징수_신고_매뉴얼' },
            { text: '고용보험 매뉴얼',                   link: '/NEWTEST/manual/5-2._고용보험_매뉴얼' },
            { text: '종합소득세 신고 매뉴얼',             link: '/NEWTEST/manual/5-3._종합소득세_신고_매뉴얼' },
            { text: '국외여행 업무 매뉴얼',               link: '/NEWTEST/manual/6._국외여행_업무_매뉴얼' },
            { text: '민원 응대 매뉴얼',                   link: '/NEWTEST/manual/7._민원_응대_매뉴얼' },
            { text: '인권침해 구제 매뉴얼',               link: '/NEWTEST/manual/8._인권침해_구제_매뉴얼' },
            { text: '예산편성집행 기준',                 link: '/NEWTEST/manual/9._예산편성집행_기준' },
            { text: '예산 Q&A',                          link: '/NEWTEST/manual/10._예산_Q&A' },
            { text: '2025 지급단가',                     link: '/NEWTEST/manual/11._2025_지급단가' },
            { text: '수탁사업 예산편성 및 집행절차',     link: '/NEWTEST/manual/12._수탁사업_예산편성_및_집행절차' },
            { text: '법률자문의뢰서(양식)',               link: '/NEWTEST/manual/13._법률자문의뢰서(양식)' },
            { text: '계약심사 매뉴얼(seoul)',            link: '/NEWTEST/manual/14._계약심사_매뉴얼' },
            { text: '용역매뉴얼',                         link: '/NEWTEST/manual/15._용역매뉴얼' },
            { text: '공간 운영종료 매뉴얼',               link: '/NEWTEST/manual/16._공간_운영종료_매뉴얼' },
          ]
        }
      ],
      '/regulation/': [
        {
          text: '규정집',
          items: [
            { text: '규정관리규정 전면개정(안)',                 link: '/NEWTEST/regulation/규정관리규정 초안v9' },

          ]
        }
      ]  
    },
    // 1) 상단 소셜 링크
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gi0000sfac/NEWTEST' }
    ]
  }
})
