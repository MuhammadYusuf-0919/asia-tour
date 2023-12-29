// @/utils/index.ts

interface FakeData {
    label: string;
    value: string;
    // Add more properties as needed
}

export function generateFakeData(count: number, mapFunction: (index: number) => FakeData): FakeData[] {
    const fakeData: FakeData[] = [];
    for (let i = 0; i < count; i++) {
        fakeData.push(mapFunction(i));
    }
    return fakeData;
}
