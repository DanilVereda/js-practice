const testResults = [
  { name: 'Login test', passed: true },
  { name: 'Checkout test', passed: true },
  { name: 'Profile test', passed: true },
];

function analyzeTests(testResults) {
  const output = {
    passed: null,
    failed: null,
    status: null,
  };
  for (const test of testResults) {
    if (test.passed === true) {
      output.passed++;
    } else {
      output.failed++;
    }
  }
  if (output.failed === null) {
    output.status = 'Build passed';
  } else {
    output.status = 'Build failed';
  }
  return output;
}

console.log(analyzeTests(testResults));
