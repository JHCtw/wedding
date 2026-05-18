var VENDORS = {
  sosi: {
    id: 'sosi',
    name: 'SOSI FOTO',
    category: '攝影工作室',
    tagCls: 'tag-photo',
    icon: '📷',
    iconBg: '#ede9fe',
    website: 'https://sosistudio.com/',
    subtitle: '婚紗拍攝 ＋ 婚禮攝影紀錄',
    contractDate: '2026/04/12',
    paymentStatus: 'partial',
    paymentBadge: '訂金已付・尾款待付',
    totalAmount: 'NT$63,800',
    paidAmount: 'NT$53,000',
    remainAmount: 'NT$10,800',
    remainDue: '2026/12/06',
    tileNote: '已付 NT$53,000・尾款 NT$10,800<br>合約日：2026/04/12　地點：台北漢來大飯店',
    info: [
      { label: '合約客戶',   value: '<strong>江季浤</strong>' },
      { label: '聯絡電話',   value: '0985-650-657' },
      { label: 'Email',      value: 'jjjtek@gmail.com' },
      { label: '婚禮場地',   value: '<strong>台北漢來大飯店（GRAND HILAI）</strong>' },
      { label: '婚禮日期',   value: '<strong>2026 年 12 月 06 日（六）</strong>' },
      { label: '官方網站',   value: '<a href="https://sosistudio.com/" target="_blank">sosistudio.com</a>' },
      { label: '合約日期',   value: '2026 年 4 月 12 日' },
      { label: '付款狀態',   value: '<span class="badge badge-partial">訂金已付・尾款待付</span>' },
    ],
    sections: [
      {
        icon: '🎬', title: '婚禮攝影紀錄合約（SOSIFOTO首席）',
        content: [
          {
            type: 'pkg',
            pkgTitle: '首席方案 — 6 小時單攝影',
            pkgPrice: 'NT$27,000',
            items: [
              '拍攝時數：6 hrs',
              '全數調色相片 All files',
              '精裝相本 30×20cm　×1 pcs',
              '婚禮當天拍攝（台北漢來大飯店）',
            ],
          },
          {
            type: 'price-box',
            rows: [
              { label: '首席 6 小時（單攝影）', value: 'NT$27,000' },
              { label: '✓ 定金（2026/04/12）', value: 'NT$11,000', cls: 'paid' },
              { label: '→ 尾款（婚禮當日）', value: 'NT$16,000', cls: 'remain' },
            ],
          },
        ],
      },
      {
        icon: '👗', title: '婚紗拍攝合約（展會限定）',
        content: [
          {
            type: 'pkg',
            pkgTitle: '九小時婚紗 — 升級三套',
            pkgPrice: 'NT$36,800',
            items: [
              '拍攝時數：9 hrs',
              '婚紗造型：3 組',
              '服裝拍攝：1 套 ／ 1 組風格',
              '拍攝場景：3 組',
              '全數調色相片檔',
              '精修標案：60 張',
            ],
            extras: {
              label: '展會限定加贈',
              items: [
                '裱框大圖 75×50cm　×1',
                '精裝相本 30×30cm（20面40頁）　×1',
                '四格拍貼鑽卡（單面100pcs）　×1',
                '拍立得禮卡（單面100pcs）　×1',
                '明信片（1份20pcs）　×1',
              ],
            },
          },
          {
            type: 'price-box',
            rows: [
              { label: '九小時婚紗（升級三套）', value: 'NT$36,800' },
              { label: '✓ 定金（2026/04/12）', value: 'NT$10,000', cls: 'paid' },
              { label: '→ 拍攝款（拍攝當日）', value: 'NT$18,800', cls: 'remain' },
              { label: '→ 升級費（拍攝當日）', value: 'NT$8,000', cls: 'remain' },
            ],
          },
          { type: 'note', text: '※ 籤約人：江季浤。詳細條款請以原始合約文件為準。' },
        ],
      },
      {
        icon: '👘', title: 'SUIT UP — 婚紗禮服合作品牌',
        content: [
          {
            type: 'two-col',
            cols: [
              {
                pkgTitle: 'A 方案：2 套婚紗禮服',
                items: [
                  '<strong>＋$5,000 up：</strong>Sandy Wedding',
                  '<strong>＋$10,000 up：</strong>Lin Hui Chi Haute Couture、Hermuse Bridal Gallery、No.3 Wedding Couture、Emma Bridal Design、GOOD NUTs Wedding、ROYAL MANSION、JiB Bridal、Lillier Bridal、Winstall',
                  '<strong>＋$15,000 up：</strong>Carrea Boutique、Lifu Boutique、Velvet Hour、My Dear、A.N.D.&、Sophia',
                  '<strong>＋$20,000 up：</strong>Luxe Bride',
                  '<strong>＋$25,000 up：</strong>（更高階品牌）',
                ],
              },
              {
                pkgTitle: 'B 方案：3 套婚紗禮服',
                items: [
                  '<strong>＋$10,000 up：</strong>Sandy Wedding、Wbryall',
                  '<strong>＋$15,000 up：</strong>Lin Hui Chi Haute Couture、Hermuse Bridal Gallery、Doorknob Studio、No.3 Wedding Couture、Emma Bridal Design、SENLTUDIO、Correi Boutique、Lifu Bridal、JiB Bridal、Lillier Bridal、My Party、My Sear',
                  '<strong>＋$20,000 up：</strong>GOOD NUTs Wedding、ROYAL MANSION、Velvet Hour、A.N.D.&',
                  '<strong>＋$25,000 up：</strong>Luxe Bride、Sophia',
                  '<strong>＋$30,000 up：</strong>Coronation Jack Bridal',
                ],
              },
            ],
          },
        ],
      },
      {
        icon: '💄', title: 'AIR SUPPLY — 造型師支援名單',
        content: [
          {
            type: 'pkg',
            pkgTitle: 'Included（方案內含）',
            items: ['卓卓 Makeup', 'V.Studio Make up', 'Josie 聯西 Makeup Artist', '7777777_makeup_ ／ annie.makeup.art', 'Risa Make-up Artist', '妍辰・彩妝・造型', '莉莉 zzmakeup ／ Queenie Makeup', 'Yvonne CH Bridal Stylist'],
          },
          {
            type: 'grid-2',
            pkgs: [
              { pkgTitle: '＋NT$3,000', items: ['Makeup Artist 愛琪', 'kc.makeup77', 'Cammymakeup'] },
              { pkgTitle: '＋NT$6,000', items: ['張衣帆 Ev makeup studio', 'Ina — Hester makeup'] },
              { pkgTitle: '＋NT$8,000（山山 造型師）', items: ['Jimmy ／ Gina ／ Elsa ／ Zooey', '— Priti makeup'] },
              { pkgTitle: '＋NT$10,000', items: ['Wawa 劉光瑩 — Priti makeup', 'EN ／ Millie ／ Petty — 老娘造型團隊', 'Zona ／ Chris — 老娘造型團隊', 'Shiny-makeup studio'] },
              { pkgTitle: '＋NT$15,000', items: ['Hester — Hester makeup', 'littlepig 小豬', 'Mako Chou 周香然'] },
              { pkgTitle: '＋NT$29,000', items: ['老娘 謝易倫 — 老娘造型團隊'] },
            ],
          },
        ],
      },
      {
        icon: '🎥', title: '1505 X — 攝影師團隊',
        content: [
          {
            type: 'pkg',
            pkgTitle: '攝影師名單（風格雷達圖評估）',
            note: '各攝影師依 Rock・Pop・Country・Funk・R&B 五維風格評分',
            items: ['好于 JC', '束 BK', '澎朗朗 MTV', '参侑 Tori', '薇藜葉 Mo', '漢斯 Hans', '艾 Eric', '薔薇刻 Sam', '都 DT', '林 Allen', '澎澎 Luse'],
          },
        ],
      },
      {
        icon: '💰', title: '費用總計',
        content: [
          {
            type: 'price-box',
            rows: [
              { label: '婚禮攝影（首席 6 小時）', value: 'NT$27,000' },
              { label: '婚紗拍攝（九小時升級三套）', value: 'NT$36,800' },
              { label: '合計', value: 'NT$63,800', cls: 'total' },
              { label: '✓ 已付', value: 'NT$53,000', cls: 'paid' },
              { label: '→ 待付尾款', value: 'NT$10,800', cls: 'remain' },
            ],
            note: '※ 造型師升級、禮服方案升級費用另計。以上金額以原始合約為準。',
          },
        ],
      },
    ],
  },

  inkajan: {
    id: 'inkajan',
    name: '印卡讚',
    category: '即拍服務',
    tagCls: 'tag-instant',
    icon: '📸',
    iconBg: '#fce7f3',
    website: 'https://www.papontw.com/',
    subtitle: '婚禮即拍・旗艦方案',
    contractDate: '2025/06/10',
    contractLabel: '簽約日',
    paymentStatus: 'partial',
    paymentBadge: '定金已付・尾款待付',
    totalAmount: 'NT$42,070',
    paidAmount: 'NT$5,070',
    remainAmount: 'NT$28,800',
    remainDue: '2026/12/06（簽到日）',
    tileNote: '已付定金 NT$5,070・尾款 NT$28,800（簽到日付清）<br>簽約日：2025/06/10',
    info: [
      { label: '新人姓名',   value: '<strong>柔瑄 ＋ 季浤</strong>' },
      { label: '婚宴日期',   value: '<strong>2026 年 12 月 06 日（六）</strong>' },
      { label: '婚宴場地',   value: '<strong>台北漢來大飯店</strong>' },
      { label: '官方網站',   value: '<a href="https://www.papontw.com/" target="_blank">papontw.com</a>' },
      { label: '簽約日期',   value: '2025 年 6 月 10 日' },
      { label: '選用方案',   value: '<strong>旗艦 Flagship 方案（婚展優惠價）</strong>' },
      { label: '付款方式',   value: '現金 ／ 匯款，尾款於簽到日（婚禮當天）付清' },
      { label: '付款狀態',   value: '<span class="badge badge-partial">定金已付・尾款待付</span>' },
    ],
    sections: [
      {
        icon: '✨', title: '旗艦方案內容（婚展獨家）',
        content: [
          {
            type: 'pkg',
            pkgTitle: '旗艦 Flagship 方案',
            pkgPrice: 'NT$32,000（婚展優惠，原價 NT$33,000）',
            items: [
              '獨家婚禮美短拍專輯　×1 組',
              '場域美術攝影相片　×2 名攝影',
              'LINE 電子書上傳服務　×4',
              'VIP 印卡讚 LINE@ 個人專屬帳號',
              '生日快樂喜帖卡',
              '訂婚喜帖卡',
              'AT 式掃碼結合系統',
              '一對一 App 使用教學',
              '超過 AT 拍攝張數享加購折扣優惠',
              '即時列印拍攝效果預覽',
              '水晶拍立得邊框選擇',
              '拍立得 4D 立體感',
              '尺寸 4×6 全彩電子相片',
              'QR code　×30 組',
            ],
          },
          {
            type: 'pkg',
            pkgTitle: '加購拍攝',
            pkgPrice: 'NT$10,070',
            items: ['加拍服務（含於本次訂單）'],
          },
        ],
      },
      {
        icon: '🎁', title: '婚展獨家加碼贈品',
        content: [
          {
            type: 'two-col',
            cols: [
              { pkgTitle: '相片周邊', items: ['專屬相框（10 框成組、水晶相框）', '多款式仿郵票貼紙 B1', '升級光年相本 B2', 'MV 成長影片（1 支、現場動態影片 / 片）'] },
              { pkgTitle: 'LINE 服務', items: ['LINE 電子喜帖魔法包 B1', '三連拍相框（LINE 上傳）', '拍立得自拍版 / 精品相本 B2', '全面升級 LINE 上傳相片雲'] },
            ],
          },
          {
            type: 'pkg',
            pkgTitle: '互動遊戲 11 選 2（限值 NT$10,000）',
            items: ['婚禮現場互動遊戲，可從 11 種遊戲中自選 2 種', '搭配 QR code 掃碼系統'],
          },
        ],
      },
      {
        icon: '💰', title: '費用總計',
        content: [
          {
            type: 'price-box',
            rows: [
              { label: '旗艦方案原價', value: 'NT$33,000', cls: 'strike' },
              { label: '旗艦方案（婚展優惠價）', value: 'NT$32,000' },
              { label: '加購拍攝', value: 'NT$10,070' },
              { label: '合計', value: 'NT$42,070', cls: 'total' },
              { label: '✓ 已付定金', value: 'NT$5,070', cls: 'paid' },
              { label: '→ 待付尾款（婚禮當天付清）', value: 'NT$28,800', cls: 'remain' },
            ],
            note: '※ 尾款於 2026/12/06 婚宴簽到日付清。以合約原件為準。',
          },
        ],
      },
    ],
  },

  mongen: {
    id: 'mongen',
    name: '蒙恩聽障烘焙坊',
    category: '喜餅',
    tagCls: 'tag-cake',
    icon: '🎂',
    iconBg: '#dcfce7',
    website: 'https://www.deaf.com.tw/',
    subtitle: 'Amazing Grace Deaf Bakery',
    contractDate: '2026/04/12',
    contractLabel: '訂購日',
    paymentStatus: 'partial',
    paymentBadge: '訂金已付・取貨前結清',
    totalAmount: '依盒數計算',
    paidAmount: '訂金已付',
    remainAmount: '—',
    remainDue: '2026/11/24（取貨日）',
    tileNote: '取貨日：2026/11/24（婚禮前約 2 週）<br>訂購日：2026/04/12　有 NT$1,000 折價券',
    info: [
      { label: '服務項目',   value: '<strong>結婚喜餅訂製</strong>' },
      { label: '官方網站',   value: '<a href="https://www.deaf.com.tw/" target="_blank">deaf.com.tw</a>' },
      { label: '訂購日期',   value: '2026 年 4 月 12 日（民國 115 年 4 月 12 日）' },
      { label: '訂購數量',   value: '<strong>100 盒（A+C 方案）</strong>' },
      { label: '取貨日期',   value: '<strong>2026 年 11 月 24 日</strong>（婚禮前約 2 週）' },
      { label: '婚禮日期',   value: '<strong>2026 年 12 月 06 日（六）</strong>' },
      { label: '聯絡電話 1', value: '0958-862-047　iceeshy27@gmail.com' },
      { label: '聯絡電話 2', value: '0955-620-1055　jjjtek@gmail.com' },
      { label: '付款狀態',   value: '<span class="badge badge-partial">訂金已付・取貨時結清</span>' },
    ],
    sections: [
      {
        icon: '🍰', title: '喜餅方案說明',
        content: [
          {
            type: 'pkg',
            pkgTitle: '甜蜜喜餅（最低 100 個起訂）',
            items: [
              '一盒喜餅（三喜盒一）',
              '三喜盒三款組合：<br>&nbsp;&nbsp;— 蕾絲喜盒　4 款喜餅<br>&nbsp;&nbsp;— 三選喜　4 款喜餅<br>&nbsp;&nbsp;— 水果喜　5 款喜餅',
            ],
          },
          {
            type: 'pkg',
            pkgTitle: '月餅喜餅',
            items: ['最低 30 個起訂'],
          },
          {
            type: 'highlight',
            label: '✦ 蒙恩理念',
            color: '#166534',
            text: '蒙恩聽障烘焙坊（Amazing Grace Deaf Bakery）由聽障烘焙師傅用心製作，支持本訂單同時也是對社會公益的貢獻。',
          },
        ],
      },
      {
        icon: '🎟️', title: '婚展折價券',
        content: [
          {
            type: 'highlight',
            label: 'NT$1,000 折價券',
            color: '#92400e',
            bg: '#fffbeb',
            borderColor: '#d97706',
            items: ['取得日：2025 年 4 月 12 日（婚展活動）', '使用期限：婚禮前（2026/12/06 前）', '取貨時可折抵 NT$1,000'],
          },
        ],
      },
      {
        icon: '💰', title: '費用說明',
        content: [
          {
            type: 'price-box',
            rows: [
              { label: '喜餅金額', value: '依訂購盒數計算' },
              { label: '✓ 折價券折抵', value: '－NT$1,000', cls: 'paid' },
              { label: '✓ 訂金', value: '已付', cls: 'paid' },
              { label: '→ 取貨日（2026/09/17）結清尾款', value: '—', cls: 'remain' },
            ],
            note: '※ 8.5 折好婚禮優惠（詳見原始 DM）。確切金額以訂單原件為準。',
          },
        ],
      },
      {
        icon: '⚠️', title: '注意事項',
        content: [
          {
            type: 'checklist',
            items: [
              '取貨日期為 <strong>2026/09/17</strong>，請提前確認取貨方式（自取 ／ 配送）',
              '取貨前需結清尾款，可使用 NT$1,000 折價券',
              '喜餅為食品，請確認保存期限與婚禮發送時間',
              '如需更改數量，請盡早與廠商確認',
            ],
          },
        ],
      },
    ],
  },

  mryes: {
    id: 'mryes',
    name: 'Mr. Yes（YES先生）',
    category: '婚禮錄影',
    tagCls: 'tag-video',
    icon: '🎬',
    iconBg: '#dbeafe',
    website: 'https://mryes.com/',
    subtitle: '婚禮錄影服務',
    contractDate: '2025/04/12',
    paymentStatus: 'partial',
    paymentBadge: '部分已付・尾款待付',
    totalAmount: 'NT$58,000',
    paidAmount: 'NT$20,000（3,000+17,000）',
    remainAmount: 'NT$38,000',
    remainDue: '2026/12/06（婚禮當天）',
    tileNote: '首席方案＋SDE（婚展優惠）<br>已付 NT$20,000・尾款 NT$38,000（婚禮當天）',
    info: [
      { label: '廠商名稱',   value: '<strong>YES先生婚禮錄影</strong>' },
      { label: '官方網站',   value: '<a href="https://mryes.com/" target="_blank">mryes.com</a>' },
      { label: '服務項目',   value: '<strong>婚禮錄影</strong>' },
      { label: '聯絡人',     value: '王紀銘' },
      { label: '聯絡電話',   value: '0918-669-041' },
      { label: '訂金日期',   value: '2025 年 4 月 12 日' },
      { label: '付款方式',   value: '尾款於 2026/12/06 婚禮當天付清' },
      { label: '付款狀態',   value: '<span class="badge badge-partial">訂金已付・尾款待付</span>' },
    ],
    sections: [
      {
        icon: '🧾', title: '訂單收據',
        content: [
          {
            type: 'pkg',
            pkgTitle: '首席方案＋SDE（婚展優惠）',
            items: ['首席攝影師方案', 'SDE（Same Day Edit）婚禮快剪快播', '詳細方案內容請確認原始合約'],
          },
          {
            type: 'price-box',
            rows: [
              { label: '首席方案＋SDE（婚展優惠價）', value: 'NT$58,000' },
              { label: '合計', value: 'NT$58,000', cls: 'total' },
              { label: '✓ 已付訂金（2025/04/12）', value: 'NT$3,000', cls: 'paid' },
              { label: '✓ 已付款（2026/04/16）', value: 'NT$17,000', cls: 'paid' },
              { label: '　已付合計', value: 'NT$20,000', cls: 'paid' },
              { label: '→ 待付尾款（2026/12/06 婚禮當天）', value: 'NT$38,000', cls: 'remain' },
            ],
          },
        ],
      },
      {
        icon: '⚠️', title: '注意事項',
        content: [
          {
            type: 'checklist',
            items: [
              '提前與錄影師確認婚禮當天流程與時間表',
              'SDE 快剪快播需確認播出時間與場地播放設備',
              '確認錄影師抵達時間（通常在新娘化妝前開始）',
              '尾款 NT$38,000 於 2026/12/06 婚禮當天付清',
            ],
          },
        ],
      },
    ],
  },

  beauty: {
    id: 'beauty',
    name: '婚前護膚療程',
    category: '婚前保養',
    tagCls: 'tag-beauty',
    icon: '✨',
    iconBg: '#fef3c7',
    website: 'https://www.dr-shine.com.tw/',
    subtitle: '婚禮級護膚組合（契約服務）',
    contractDate: '2026/04/12',
    contractLabel: '簽約日',
    paymentStatus: 'paid',
    paymentBadge: '已付清',
    totalAmount: '約 NT$40,689',
    paidAmount: '約 NT$40,689（已付清）',
    remainAmount: '—',
    remainDue: '—',
    tileNote: '簽約日：2026/04/12　兩份合約已付清',
    info: [
      { label: '廠商名稱',   value: '<strong>光澤醫美診所</strong>' },
      { label: '官方網站',   value: '<a href="https://www.dr-shine.com.tw/" target="_blank">dr-shine.com.tw</a>' },
      { label: '服務項目',   value: '<strong>婚禮級護膚組合（契約服務）</strong>' },
      { label: '簽約日期',   value: '2026 年 4 月 12 日（民國 115 年 4 月 12 日）' },
      { label: '合約份數',   value: '兩份（新郎 ／ 新娘各一）' },
      { label: '婚禮日期',   value: '<strong>2026 年 12 月 06 日（六）</strong>' },
      { label: '付款狀態',   value: '<span class="badge badge-paid">已付清</span>' },
    ],
    sections: [
      {
        icon: '🧴', title: '訂單一　護膚療程套餐',
        content: [
          {
            type: 'pkg',
            pkgTitle: '婚前護膚療程（2026/04/13）',
            items: ['臉部深層清潔保養', '保濕補水療程', '美白嫩膚療程', '各式臉部護理項目（詳見原始合約）', '身體護理相關療程'],
          },
          {
            type: 'price-box',
            rows: [
              { label: '護膚療程套餐', value: '約 NT$39,990' },
              { label: '合計', value: '約 NT$39,990', cls: 'total' },
            ],
            note: '※ 金額由訂單圖片辨識，實際金額以原始合約為準。',
          },
        ],
      },
      {
        icon: '🧴', title: '訂單二　護膚療程套餐',
        content: [
          {
            type: 'pkg',
            pkgTitle: '婚前護膚療程（2026/04/13）',
            items: ['療程內容與訂單一相似', '詳細項目請參閱原始合約文件'],
          },
          {
            type: 'price-box',
            rows: [
              { label: '護膚療程套餐', value: '約 NT$699' },
              { label: '合計', value: '約 NT$699', cls: 'total' },
            ],
            note: '※ 金額由訂單圖片辨識，實際金額以原始合約為準。',
          },
        ],
      },
      {
        icon: '💰', title: '費用總計',
        content: [
          {
            type: 'price-box',
            rows: [
              { label: '訂單一', value: '約 NT$39,990' },
              { label: '訂單二', value: '約 NT$699' },
              { label: '兩份合計', value: '約 NT$40,689', cls: 'total' },
              { label: '✓ 已付清（現金＋刷卡）', value: '約 NT$40,689', cls: 'paid' },
            ],
            note: '※ 以上金額為圖片辨識估算，確切費用請以原始合約文件為準。',
          },
        ],
      },
      {
        icon: '⚠️', title: '婚前保養建議時程',
        content: [
          {
            type: 'checklist',
            items: [
              '<strong>婚禮前 6 個月：</strong>開始基礎護膚療程，建立肌膚底子',
              '<strong>婚禮前 3 個月：</strong>加強密集護理，針對特定問題肌膚加強改善',
              '<strong>婚禮前 1 個月：</strong>避免嘗試新的療程或換品牌，保持穩定',
              '<strong>婚禮前 1 週：</strong>做最後一次輕柔保濕護理，避免刺激性療程',
              '確認療程是否需要提前預約指定日期',
            ],
          },
        ],
      },
    ],
  },
};

var VENDOR_ORDER = ['sosi', 'inkajan', 'mongen', 'mryes', 'beauty'];
