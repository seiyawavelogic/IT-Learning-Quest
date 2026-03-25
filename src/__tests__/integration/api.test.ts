/**
 * @jest-environment node
 */

import { GET } from '@/app/api/health/route'

describe('GET /api/health', () => {
    it('200ステータスと { status: "ok" } を返す', async () => {
        const response = await GET()
        const body = await response.json()

        expect(response.status).toBe(200)
        expect(body).toEqual({ status: 'ok' })
    })
})