import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ce que disent nos apprenants</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Découvrez les témoignages de nos étudiants qui ont transformé leur carrière grâce à nos formations
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{testimonial.content}</CardDescription>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.course}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Développeuse Web",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus temporibus consequuntur explicabo excepturi, nobis quisquam saepe, eum recusandae",
    course: "Développement Web Full Stack",
  },
  {
    name: "Thomas Dubois",
    role: "Concept Designer Lumions",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus temporibus consequuntur explicabo excepturi, nobis quisquam saepe, eum recusandae",
    course: "Développement Web Full Stack",
  },
  {
    name: "Amina Ndiaye",
    role: "Developpeuse Frontend",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus temporibus consequuntur explicabo excepturi, nobis quisquam saepe, eum recusandae",
    course: "Développement Web Full Stack",
  },
]
