"use client"

import { useCallback, useEffect, useState } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

type YouTubeVideo = {
    id: string
    title: string
    thumbnail: string
}

export function YoutubeSharingSession() {
    const [videos, setVideos] = useState<YouTubeVideo[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchVideos = useCallback(async () => {
        try {
            const response = await fetch("/api/youtube-playlist")
            const data = await response.json()

            if (!response.ok) {
                throw new Error(
                    data.error ?? "Gagal mengambil video YouTube."
                )
            }

            setVideos(data)
            setError("")
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Terjadi kesalahan saat mengambil video."
            )
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        void fetchVideos()

        const interval = window.setInterval(() => {
            void fetchVideos()
        }, 5 * 60 * 1000)

        return () => window.clearInterval(interval)
    }, [fetchVideos])

    return (
        <section
            id="sharing-session"
            className="bg-background py-8 md:py-10"
        >
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-8 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                        Video & Dokumentasi
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Sharing Session Klinik Pemdi
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        Simak berbagai video sharing session, diskusi,
                        dan wawasan seputar transformasi digital
                        pemerintahan melalui kanal YouTube kami.
                    </p>
                </div>

                <div className="mx-auto max-w-6xl">
                    {loading && (
                        <p className="py-10 text-center text-muted-foreground">
                            Memuat video YouTube...
                        </p>
                    )}

                    {!loading && error && (
                        <div
                            role="alert"
                            className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-center text-sm"
                        >
                            <p>{error}</p>
                            <button
                                type="button"
                                onClick={() => {
                                    setLoading(true)
                                    void fetchVideos()
                                }}
                                className="mt-3 rounded-md bg-primary px-4 py-2 text-primary-foreground"
                            >
                                Coba lagi
                            </button>
                        </div>
                    )}

                    {!loading && !error && videos.length === 0 && (
                        <p className="py-10 text-center text-muted-foreground">
                            Belum ada video yang bisa ditampilkan.
                        </p>
                    )}

                    {!error && videos.length > 0 && (
                        <Carousel
                            opts={{
                                align: "start",
                                loop: videos.length > 3,
                            }}
                            className="mx-auto w-full px-4"
                        >
                            <CarouselContent>
                                {videos.map((video) => (
                                    <CarouselItem
                                        key={video.id}
                                        className="basis-full sm:basis-1/2 lg:basis-1/3"
                                    >
                                        <Card className="h-full overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
                                            <CardContent className="p-0">
                                                <a
                                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Tonton ${video.title} di YouTube`}
                                                    className="group relative block aspect-video overflow-hidden bg-muted"
                                                >
                                                    <img
                                                        src={video.thumbnail}
                                                        alt={`Thumbnail ${video.title}`}
                                                        loading="lazy"
                                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                                                        <span className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow">
                                                            ▶ Tonton video
                                                        </span>
                                                    </span>
                                                </a>

                                                <div className="p-4">
                                                    <h3 className="line-clamp-2 font-semibold leading-snug">
                                                        {video.title}
                                                    </h3>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="left-0 sm:-left-3" />
                            <CarouselNext className="right-0 sm:-right-3" />
                        </Carousel>
                    )}

                    <p className="mt-6 text-center text-xs text-muted-foreground">
                        Video diperbarui secara berkala setiap 5 menit selama halaman terbuka.
                    </p>
                </div>
            </div>
        </section>
    )
}
