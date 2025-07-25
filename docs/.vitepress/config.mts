import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SFAC 자료모음',
  description: '매뉴얼 & 규정집을 한 곳에',
  base: process.env.NODE_ENV === 'production'
    ? '/NEWTEST/'   // → GitHub Pages 레포 이름
    : '/',

  themeConfig: {
    search: {
      provider: 'local'
    },
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
            { text: '회계매뉴얼',                         link: '/manual/3-1._회계매뉴얼' },
            { text: '수익사업 매뉴얼',                   link: '/manual/3-2._수익사업_매뉴얼' },
            { text: '복무근태 매뉴얼',                   link: '/manual/매뉴얼_작성지침_서식파일_' },
            { text: '난임치료휴가 운영지침',             link: '/manual/4-2._난임치료휴가_운영지침' },
            { text: '육아시간 사용지침',                 link: '/manual/4-3._육아시간_사용지침' },
            { text: '장기재직자 재충전휴가 사용지침',     link: '/manual/4-4._장기재직자_재충전휴가_사용지침' },
            { text: '원천징수 신고 매뉴얼',               link: '/manual/5-1._원천징수_신고_매뉴얼' },
            { text: '고용보험 매뉴얼',                   link: '/manual/5-2._고용보험_매뉴얼' },
            { text: '종합소득세 신고 매뉴얼',             link: '/manual/5-3._종합소득세_신고_매뉴얼' },
            { text: '국외여행 업무 매뉴얼',               link: '/manual/6._국외여행_업무_매뉴얼' },
            { text: '민원 응대 매뉴얼',                   link: '/manual/7._민원_응대_매뉴얼' },
            { text: '인권침해 구제 매뉴얼',               link: '/manual/8._인권침해_구제_매뉴얼' },
            { text: '예산편성집행 기준',                 link: '/manual/9._예산편성집행_기준' },
            { text: '예산 Q&A',                          link: '/manual/2025 예산Q&A - 부록포함(최종)' },
            { text: '2025 지급단가',                     link: '/manual/11._2025_지급단가' },
            { text: '수탁사업 예산편성 및 집행절차',     link: '/manual/12._수탁사업_예산편성_및_집행절차' },
            { text: '법률자문의뢰서(양식)',               link: '/manual/13._법률자문의뢰서(양식)' },
            { text: '계약심사 매뉴얼(seoul)',            link: '/manual/14._계약심사_매뉴얼' },
            { text: '용역매뉴얼',                         link: '/manual/15._용역매뉴얼' },
            { text: '공간 운영종료 매뉴얼',               link: '/manual/16._공간_운영종료_매뉴얼' },
          ]
        }
      ],
      '/regulation/': [
        {
          text: '규정집'
        },
        
        {
          text: '1편 조례 및 정관',
          items: [
            { text: '설립조례',                 link: '/regulation/101_서울특별시_재단법인_서울문화재단_설립_및_운영에_관한_조례(231229)' },
            { text: '정관',                 link: '/regulation/102_재단법인 서울문화재단 정관(231024)' },
          ]
        },

        {
          text: '2편 조직',
          items: [
            { text: '직제규정',                 link: '/regulation/201_직제규정(250704)' },
            { text: '규정관리규정',                 link: '/regulation/102_재단법인 서울문화재단 정관(231024)' },
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
