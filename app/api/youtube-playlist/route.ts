
import { NextResponse } from "next/server"

export const revalidate = 300

export async function GET() {
    const apiKey = process.env.YOUTUBE_API_KEY
    const playlistId = "PLARMoUIlgbb4"

    if (!apiKey) {
        return NextResponse.json(
            { error: "Konfigurasi YouTube API belum tersedia." },
            { status: 500 }
        )
    }

    try {
        const params = new URLSearchParams({
            part: "snippet",
            playlistId,
            maxResults: "50",
            key: apiKey,
        })

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?${params}`,
            { next: { revalidate: 300 } }
        )

        if (!response.ok) {
            console.error("YouTube API error:", await response.text())

            return NextResponse.json(
                { error: "Gagal mengambil video dari YouTube." },
                { status: 502 }
            )
        }

        const data = await response.json()

        const videos = (data.items ?? [])
            .filter(
                (item: {
                    snippet?: {
                        title?: string
                        resourceId?: { videoId?: string }
                        thumbnails?: {
                            high?: { url?: string }
                            medium?: { url?: string }
                            default?: { url?: string }
                        }
                    }
                }) =>
                    item.snippet?.resourceId?.videoId &&
                    item.snippet.title !== "Private video" &&
                    item.snippet.title !== "Deleted video"
            )
            .map(
                (item: {
                    snippet: {
                        title: string
                        resourceId: { videoId: string }
                        thumbnails?: {
                            high?: { url?: string }
                            medium?: { url?: string }
                            default?: { url?: string }
                        }
                    }
                }) => ({
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                    thumbnail:
                        item.snippet.thumbnails?.high?.url ??
                        item.snippet.thumbnails?.medium?.url ??
                        item.snippet.thumbnails?.default?.url ??
                        "",
                })
            )

        return NextResponse.json(videos)
    } catch (error) {
        console.error("Gagal mengambil playlist YouTube:", error)

        return NextResponse.json(
            { error: "Terjadi kesalahan saat mengambil playlist." },
            { status: 500 }
        )
    }
}
