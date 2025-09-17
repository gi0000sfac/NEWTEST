import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote' 

export default defineConfig({
  title: 'SFAC 자료모음',
  description: '매뉴얼&규정&문화정책을 한 곳에',
  base: process.env.NODE_ENV === 'production'
    ? '/NEWTEST/'   // → GitHub Pages 레포 이름
    : '/',
    markdown: {
      config: (md) => {
        md.use(footnote) // 2. 플러그인 사용 설정
      }
    },

  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: '매뉴얼',    link: '/manual/' },
      { text: '규정집',    link: '/regulation/' },
      { text: '문화정책',    link: '/policy/' }
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
            { text: '복무근태 매뉴얼',                   link: '/manual/4-1._복무근태_매뉴얼' },
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
            { text: '예산 Q&A',                          link: '/manual/10._예산_Q&A' },
            { text: '2025 지급단가_작업완료',                     link: '/manual/3. 25년 지급단가' },
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
      { text: '서울특별시 재단법인 서울문화재단 설립 및 운영에 관한 조례', link: '/regulation/101_서울특별시 재단법인 서울문화재단 설립 및 운영에 관한 조례(231229)' },
      { text: '재단법인 서울문화재단 정관', link: '/regulation/102_재단법인 서울문화재단 정관(231024)' },
    ]
  },

  {
    text: '2편 조직관리',
    items: [
      { text: '직제규정', link: '/regulation/201_직제규정(250704)' },
      { text: '임시기구 운영내규', link: '/regulation/202_임시기구 운영내규(250206)' },
      { text: '이사회 운영규정', link: '/regulation/203_이사회 운영규정(210914)' },
      { text: '규정관리규정', link: '/regulation/204_규정관리규정(040427)' },
      { text: '임원추천위원회 운영규정', link: '/regulation/205_임원추천위원회 운영규정(220228)' },
      { text: '서울문화재단 노동이사후보 선거관리에 관한 내규', link: '/regulation/206_서울문화재단 노동이사후보 선거관리에 관한 내규(220610)' },
    ]
  },

  {
    text: '3편 인사 및 복무',
    items: [
      { text: '인사규정', link: '/regulation/301_인사규정(250514)' },
      { text: '근무평정에 관한 내규', link: '/regulation/303_근무평정에 관한 내규(240229)' },
      { text: '승진제도 시행에 관한 내규', link: '/regulation/304_승진제도 시행에 관한 내규(240304)' },
      { text: '직원 채용에 관한 내규', link: '/regulation/305_직원 채용에 관한 내규(250812)★' },
      { text: '복무규정', link: '/regulation/306_복무규정(250514)' },
      { text: '국외여행내규', link: '/regulation/307_국외여행내규(241231)' },
      { text: '국외연수내규', link: '/regulation/308_국외연수내규(141119)' },
      { text: '계약직 직원 운영에 관한 내규', link: '/regulation/309_계약직 직원 운영에 관한 내규(231019)' },
      { text: '서울문화재단 무기계약직 직원 운영 규정', link: '/regulation/310_서울문화재단 무기계약직 직원 운영 규정(170609)' },
      { text: '임시직 운영 내규', link: '/regulation/311_임시직 운영 내규(221222)' },
      { text: '공무직 운영에 관한 내규', link: '/regulation/312_공무직 운영에 관한 내규(150702)' },
      { text: '무기계약직의 정규직 전환에 관한 내규', link: '/regulation/313_무기계약직의 정규직 전환에 관한 내규(170310)' },
      { text: '임원인사규정', link: '/regulation/314_임원인사규정(221114)' },
      { text: '운영지원직 운영에 관한 내규', link: '/regulation/315_운영지원직 운영에 관한 내규(250207)' },
      { text: '임금피크제 운영에 관한 내규', link: '/regulation/316_임금피크제 운영에 관한 내규(211229)' },
      { text: '전문위원 운영에 관한 내규 제정', link: '/regulation/317_전문위원 운영에 관한 내규 제정(211230)' },
      { text: '명예퇴직수당 운영 내규', link: '/regulation/318_명예퇴직수당 운영 내규(240405)' },
    ]
  },

  {
    text: '4편 복무',
    items: [
      { text: '보수규정', link: '/regulation/401_보수규정(250228)' },
      { text: '임직원 퇴직금 규정', link: '/regulation/402_임직원 퇴직금 규정(240227)' },
      { text: '보수규정 시행 내규', link: '/regulation/403_보수규정 시행 내규(250510)' },
      { text: '여비규정', link: '/regulation/404_여비규정(230619)' },
      { text: '기관성과급 시행 내규', link: '/regulation/405_기관성과급 시행 내규(221215)' },
    ]
  },

  {
    text: '5편 재무 및 회계',
    items: [
      { text: '기본재산 관리규정', link: '/regulation/501_기본재산 관리규정(191226)' },
      { text: '예산관리규정', link: '/regulation/502_예산관리규정(191230)' },
      { text: '회계규정', link: '/regulation/503_회계규정(211229)' },
    ]
  },

  {
    text: '6편 업무관리',
    items: [
      { text: '문서관리규정', link: '/regulation/601_문서관리규정(211229)' },
      { text: '사무위임전결내규', link: '/regulation/602_사무위임전결내규(250514)' },
      { text: '물품관리규정', link: '/regulation/603_물품관리규정(191230)' },
      { text: '업무 인수인계 내규', link: '/regulation/604_업무 인수인계 내규(060323)' },
      { text: '제안규정', link: '/regulation/605_제안규정(191230)' },
      { text: '감사규정', link: '/regulation/606_감사규정(190329)' },
      { text: '일상감사내규', link: '/regulation/607_일상감사내규(240613)' },
      { text: '서울문화재단 적극행정 면책제도 운영내규', link: '/regulation/608_서울문화재단 적극행정 면책제도 운영내규(230905)' },
      { text: '수탁사업 운영규정', link: '/regulation/609_수탁사업 운영규정(230926)' },
      { text: '연구관리 규정', link: '/regulation/610_연구관리 규정(210305)' },
      { text: '인권경영규정', link: '/regulation/611_인권경영규정(241223)' },
      { text: '서울문화재단 공용차량 관리내규', link: '/regulation/612_서울문화재단 공용차량 관리내규(230905)' },
      { text: '소송사무 처리에 관한 내규', link: '/regulation/613_소송사무 처리에 관한 내규(220526)' },
      { text: '서울문화재단 안전보건관리규정', link: '/regulation/614_서울문화재단 안전보건관리규정(20220701)' },
    ]
  },

  {
    text: '7편 지원금 기부금 관리',
    items: [
      { text: '문예지원사업 지원금 관리규정', link: '/regulation/701_문예지원사업 지원금 관리규정(180323)' },
      { text: '기부금 관리 및 운용규정', link: '/regulation/702_기부금 관리 및 운용규정(200331)' },
      { text: '기부금 관리 및 운용규정 시행 내규', link: '/regulation/703_기부금 관리 및 운용규정 시행 내규(230905)' },
      { text: '서울문화재단 후원명칭 사용 및 시상후원 승인에 관한 내규', link: '/regulation/704_서울문화재단 후원명칭 사용 및 시상후원 승인에 관한 내규(200302)' },
    ]
  },

  {
    text: '8편 공간운영 대관',
    items: [
      { text: '공연장 사용규정', link: '/regulation/801_공연장 사용규정(220701)' },
      { text: '예술창작공간 대관규정', link: '/regulation/802_예술창작공간 대관규정(180323)' },
      { text: '서울시 창작공간 운영내규', link: '/regulation/803_서울시 창작공간 운영내규(250410)' },
      { text: '서울문화예술교육센터 대관 운영 통합내규', link: '/regulation/804_서울문화예술교육센터 대관 운영 통합내규(241231)' },
      { text: '재단청사 운용 및 대관규정', link: '/regulation/805_재단청사 운용 및 대관규정(191230)' },
      { text: '서울연극센터 운영 내규', link: '/regulation/806_서울연극센터 운영 내규(250222)' },
      { text: '대학로극장 쿼드 대관 내규', link: '/regulation/807_대학로극장 쿼드 대관 내규(241029)' },
      { text: '서울예술인지원센터 대관 운영내규', link: '/regulation/808_서울예술인지원센터 대관 운영내규 (250311)' },
      { text: '서울연극창작센터 운영내규', link: '/regulation/809_서울연극창작센터 운영내규(250410)' },
    ]
  },

  {
    text: '9편 고객윤리',
    items: [
      { text: '서울문화재단 시민 서비스 헌장', link: '/regulation/901_서울문화재단 시민 서비스 헌장(230905)' },
      { text: '서울문화재단 임직원 행동강령', link: '/regulation/902_서울문화재단 임직원 행동강령(241217)' },
      { text: '서울문화재단 성희롱 성폭력 예방 및 2차 피해 방지 내규', link: '/regulation/903_서울문화재단 성희롱 성폭력 예방 및 2차 피해 방지 내규(240613)' },
      { text: '서울문화재단 정보공개 운영내규', link: '/regulation/904_서울문화재단 정보공개 운영내규(230905)' },
      { text: '시민의권리', link: '/regulation/905_시민의권리(181019)' },
      { text: '성폭행 및 성희롱 성매매 등에 관한 징계 내규', link: '/regulation/906_성폭행 및 성희롱 성매매 등에 관한 징계 내규(141119)' },
      { text: '직무관련 범죄 고발 내규', link: '/regulation/907_직무관련 범죄 고발 내규(140620)' },
      { text: '부패신고처리 및 신고자보호 등에 관한 내규', link: '/regulation/908_부패신고처리 및 신고자보호 등에 관한 내규(240112)' },
      { text: '재단발전협의회 운영협약', link: '/regulation/909_재단발전협의회 운영협약(210602)' },
      { text: '서울문화재단 직장 내 괴롭힘 예방 및 대응 조치에 관한 내규 제정', link: '/regulation/910_서울문화재단 직장 내 괴롭힘 예방 및 대응 조치에 관한 내규 제정(240613)' },
      { text: '서울문화재단 임직원의 이해충돌 방지제도 운영내규', link: '/regulation/911_서울문화재단 임직원의 이해충돌 방지제도 운영내규(230905)' },
      { text: '공익신고 처리 및 신고자 보호 등에 관한 내규', link: '/regulation/912_공익신고 처리 및 신고자 보호 등에 관한 내규(241217)' },
    ]
  }
  ], 
      '/policy/': [
        {
          text: '문화정책'
        },
        
        {
          text: '지역문화관련',
          items: [
            { text: '위기의 지역문화재단',                 link: '/policy/위기의 지역문화재단, 현실을 마주할 시간' },
          ]
        },
        {
          text: '예술지원관련',
          items: [
            { text: '모아보기',                 link: '/policy/지원정책관련 링크 모음' },
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
