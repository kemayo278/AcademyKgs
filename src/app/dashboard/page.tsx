import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, BookOpen, Calendar, Clock, Play, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <p className="text-muted-foreground">Bienvenue sur votre espace apprenant, Jean.</p>
      </div>
    </div>
  )
}

const continueLearningCourses = [
  {
    id: "1",
    title: "Développement Web Full Stack",
    module: "Module 3: JavaScript Moderne",
    progress: 68,
    timeLeft: "2h 15min",
    image: "/placeholder.svg?height=150&width=150",
  },
  {
    id: "2",
    title: "Design UX/UI Avancé",
    module: "Module 2: Principes de design d'interface",
    progress: 42,
    timeLeft: "3h 30min",
    image: "/placeholder.svg?height=150&width=150",
  },
]

const upcomingEvents = [
  {
    title: "Session live: Introduction à React",
    date: "Demain",
    time: "14:00 - 15:30",
    description: "Session interactive avec l'instructeur pour découvrir les fondamentaux de React.",
  },
  {
    title: "Date limite: Projet JavaScript",
    date: "Vendredi",
    time: "23:59",
    description: "N'oubliez pas de soumettre votre projet final pour le module JavaScript.",
  },
  {
    title: "Webinaire: Tendances du développement web",
    date: "12 Juin",
    time: "11:00 - 12:00",
    description: "Découvrez les dernières tendances et technologies du développement web.",
  },
]

const recommendedCourses = [
  {
    id: "4",
    title: "React Native pour les développeurs web",
    category: "Développement",
    rating: 4.8,
    reviews: 324,
    description: "Apprenez à créer des applications mobiles avec vos compétences web existantes.",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "5",
    title: "TypeScript pour les développeurs JavaScript",
    category: "Développement",
    rating: 4.7,
    reviews: 215,
    description: "Maîtrisez TypeScript pour écrire du code JavaScript plus robuste et maintenable.",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    id: "6",
    title: "Design System: de la théorie à la pratique",
    category: "Design",
    rating: 4.9,
    reviews: 178,
    description: "Créez et implémentez un design system complet pour vos projets.",
    image: "/placeholder.svg?height=50&width=50",
  },
]

const specializationModules = [
  {
    title: "Introduction au développement web",
    lessons: 8,
    duration: "2h 30min",
    progress: 100,
    completed: true,
    inProgress: false,
  },
  {
    title: "HTML & CSS Fondamentaux",
    lessons: 12,
    duration: "4h 15min",
    progress: 100,
    completed: true,
    inProgress: false,
  },
  {
    title: "JavaScript Moderne",
    lessons: 15,
    duration: "6h 45min",
    progress: 68,
    completed: false,
    inProgress: true,
  },
  {
    title: "React.js",
    lessons: 18,
    duration: "8h 20min",
    progress: 0,
    completed: false,
    inProgress: false,
  },
  {
    title: "Node.js & Express",
    lessons: 14,
    duration: "5h 50min",
    progress: 0,
    completed: false,
    inProgress: false,
  },
]

const specializationTimeline = [
  {
    title: "Début de la spécialisation",
    date: "15 Mars 2023",
    description: "Vous avez commencé la spécialisation Développeur Full Stack JavaScript.",
    completed: true,
  },
  {
    title: "Module 1 terminé",
    date: "29 Mars 2023",
    description: "Vous avez terminé le module Introduction au développement web.",
    completed: true,
  },
  {
    title: "Module 2 terminé",
    date: "18 Avril 2023",
    description: "Vous avez terminé le module HTML & CSS Fondamentaux.",
    completed: true,
  },
  {
    title: "Module 3 en cours",
    date: "En cours",
    description: "Vous êtes en train de suivre le module JavaScript Moderne.",
    completed: false,
  },
  {
    title: "Date prévue de fin",
    date: "15 Septembre 2023",
    description: "Date estimée de fin de la spécialisation.",
    completed: false,
  },
]
