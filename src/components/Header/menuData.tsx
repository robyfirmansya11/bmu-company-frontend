export const menuKeys = (locale) => [
  { id: 1, key: "home", path: `/${locale}` },
  { id: 2, key: "about_us", path: `/${locale}/about` },
  { id: 3, key: "contact_us", path: `/${locale}/contact` },
  { id: 5, key: "careers", path: `/${locale}/careers` },
  {
    id: 4,
    key: "pages",
    submenu: [
      { id: 41, key: "portfolio", path: `/${locale}/portfolio` },
      { id: 42, key: "exploration_overview", path: `/${locale}/eksplorasi` },
      { id: 43, key: "nickel_outlook", path: `/${locale}/prospek` },
      { id: 44, key: "operations", path: `/${locale}/operasi` },
      { id: 45, key: "licenses", path: `/${locale}/izin` },
      { id: 46, key: "conclusion", path: `/${locale}/kesimpulan` }
    ]
  }
]
