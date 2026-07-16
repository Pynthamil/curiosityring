import fs from 'fs';
import path from 'path';

const issueBody = process.env.ISSUE_BODY || '';

function extractField(fieldName) {
  const regex = new RegExp(`### ${fieldName}\\s+([^#]+)`, 'i');
  const match = issueBody.match(regex);
  return match ? match[1].trim() : null;
}

const id = extractField('ID');
const name = extractField('Display Name');
const url = extractField('Website URL');

if (!id || !name || !url) {
  console.error("Missing required fields");
  process.exit(1);
}

// Basic validation
if (!/^https?:\/\//.test(url)) {
  console.error("Invalid URL: Must start with http:// or https://");
  process.exit(1);
}

const membersPath = path.join(process.cwd(), 'data', 'members.json');
const members = JSON.parse(fs.readFileSync(membersPath, 'utf8'));

// Check for duplicates
if (members.find(m => m.id === id)) {
  console.error("ID already exists");
  process.exit(1);
}

members.push({ id, name, url });

fs.writeFileSync(membersPath, JSON.stringify(members, null, 2) + '\n');

// Export environment variables for the next steps in GitHub Actions
fs.appendFileSync(process.env.GITHUB_ENV, `NEW_MEMBER_NAME=${name}\n`);
fs.appendFileSync(process.env.GITHUB_ENV, `NEW_MEMBER_ID=${id}\n`);
