// Sample commit messages
const commitMessages = [
    "PROJ-123: Added new login logic",
    "Fix typo in documentation",
    "JIRA-456: Updated health checker endpoint",
    "Refactored code",
    "OPS-789 - Improve CI pipeline"
  ];
  
  // Regex pattern to extract Jira issue keys (e.g., PROJ-123)
  const jiraKeyPattern = /([A-Z]+-\d+)/g;
  
  commitMessages.forEach(msg => {
    const match = msg.match(jiraKeyPattern);
    if (match) {
      console.log(`✅ Jira Key(s) found in: "${msg}" → ${match.join(", ")}`);
    } else {
      console.log(`❌ No Jiraa Key found in: "${msg}"`);
    }
  });
  