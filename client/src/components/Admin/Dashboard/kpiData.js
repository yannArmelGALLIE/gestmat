export const KPI_ITEMS = [
  {
    title: 'Total Équipements',
    icon: 'laptop_chromebook',
    value: '184',
    unit: 'unités',
    trend: '+12 ce mois',
    trendIcon: 'trending_up',
    subtext: '• 91% assignés',
    accentCol: 'text-secondary'
  },
  {
    title: 'Demandes en Attente',
    icon: 'schedule',
    value: '3',
    unit: 'requêtes',
    trend: 'Traitement requis sous 24h',
    trendIcon: 'priority_high',
    cardBg: 'bg-[#FFFBEB]',
    borderCol: 'border-[#FDE68A]',
    textCol: 'text-[#92400E]',
    accentCol: 'text-[#B45309]',
    iconBg: 'bg-[#FEF3C7]'
  },
  {
    title: 'Demandes Validées (Ce mois)',
    icon: 'check_circle',
    iconFill: true,
    value: '28',
    unit: 'requêtes',
    trend: "Taux d'approbation : 87.5%",
    trendIcon: 'done_all',
    accentCol: 'text-secondary',
    iconBg: 'bg-[#ECFDF5]'
  },
  {
    title: 'Alertes Rupture de Stock',
    icon: 'inventory',
    value: '2',
    unit: 'références épuisées',
    trend: 'Réapprovisionnement suggéré',
    trendIcon: 'error_outline',
    cardBg: 'bg-[#FFF1F2]',
    borderCol: 'border-[#FECDD3]',
    textCol: 'text-[#9F1239]',
    accentCol: 'text-error',
    iconBg: 'bg-[#FFE4E6]'
  }
]
