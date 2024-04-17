const products = [
  {
    ID: "1",
    Name: "Столешница 2063/S**",
    Price: "2700",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "26",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Серый дуб",
  },
  {
    ID: "2",
    Name: "Столешница 2080/S",
    Price: "2700",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "26",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Дуб Лофт",
  },
  {
    ID: "3",
    Name: "Столешница 3079/S",
    Price: "4350",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Пепельно-коричневый Тунис",
  },
  {
    ID: "4",
    Name: "Столешница 2385/S**",
    Price: "4350",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Мрамор бежевый светлый",
  },
  {
    ID: "5",
    Name: "Столешница 4104/S**",
    Price: "6800",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "4100",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Гранитный песчаник",
  },
  {
    ID: "6",
    Name: "Столешница 2017/S**",
    Price: "6800",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "4100",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Венге",
  },
  {
    ID: "7",
    Name: "Столешница 2033/М",
    Price: "2700",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "26",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Риголетто темный",
  },
  {
    ID: "8",
    Name: "Столешница 2047/S**",
    Price: "2700",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "26",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Кантри",
  },
  {
    ID: "9",
    Name: "Столешница 2430/S**",
    Price: "4350",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Антарес",
  },
  {
    ID: "10",
    Name: "Столешница 3052/S**",
    Price: "4350",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Черный гранит",
  },
  {
    ID: "11",
    Name: "Столешница 4046/S**",
    Price: "6800",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "4100",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Кастилло темный",
  },
  {
    ID: "12",
    Name: "Столешница 2057/S**",
    Price: "6800",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "4100",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Сосна Пандероса",
  },
  {
    ID: "13",
    Name: "Столешница 2074/S**",
    Price: "2700",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "26",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Дуб Юкон",
  },
  {
    ID: "14",
    Name: "Столешница 2075/S**",
    Price: "2700",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "26",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Дуб Кера",
  },
  {
    ID: "15",
    Name: "Столешница 3029/S**",
    Price: "4350",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Мрамор Марквина черный",
  },
  {
    ID: "16",
    Name: "Столешница 2083 larix**",
    Price: "5100",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Можжевельник",
  },
  {
    ID: "17",
    Name: "Столешница 3074/S",
    Price: "8500",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "4100",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Черный Тунис",
  },
  {
    ID: "18",
    Name: "Столешница 3521/S**",
    Price: "6800",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "4100",
    Height: "38",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Тростник морской",
  },
  {
    ID: "19",
    Name: "Столешница 2022/S",
    Price: "4000",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "26",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Модена",
  },
  {
    ID: "20",
    Name: "Столешница 2338/S",
    Price: "4000",
    Surface: "Матовая",
    Factory: "Троя",
    Width: "3000",
    Height: "26",
    Depth: "600",
    Body: "ЛДСП",
    Facade: "HPL пластик",
    Color: "Лунный металл",
  },
];
