describe('ユニットテストのサンプル', () => {
    it('基本的な計算が正しく動作する', () => {
        expect(1 + 1).toBe(2)
    })

    it('文字列操作が正しく動作する', () => {
        const greeting = (name: string) => `こんにちは、${name}！`
        expect(greeting('World')).toBe('こんにちは、World！')
    })

    it('配列の合計が正しく計算される', () => {
        const sum = [1, 2, 3, 4, 5].reduce((acc, n) => acc + n, 0)
        expect(sum).toBe(15)
    })
})