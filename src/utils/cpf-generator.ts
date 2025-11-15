export function generateValidCPF(): string {
  const firstNineDigits = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 10)
  );

  const firstVerifier = calculateVerifier(firstNineDigits, 10);
  const secondVerifier = calculateVerifier([...firstNineDigits, firstVerifier], 11);

  return [...firstNineDigits, firstVerifier, secondVerifier].join('');
}

function calculateVerifier(digits: number[], multiplierStart: number): number {
  const sum = digits.reduce((acc, digit, index) => {
    return acc + digit * (multiplierStart - index);
  }, 0);

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

export function formatCPF(cpf: string): string {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function generateMultipleCPFs(count: number): string[] {
  const cpfs = new Set<string>();
  
  while (cpfs.size < count) {
    cpfs.add(generateValidCPF());
  }
  
  return Array.from(cpfs);
}