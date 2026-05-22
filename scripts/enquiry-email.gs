/**
 * Edstellar Foundation — enquiry form email handler
 * Receives form POSTs from the Partner section and emails vijay@edstellar.com.
 *
 * Deployment:
 *  1. Go to https://script.google.com → New project
 *  2. Paste this whole file into Code.gs (replace the default contents)
 *  3. Save → Deploy → New deployment → Type: Web app
 *     - Description:  Edstellar enquiry form
 *     - Execute as:   Me (vijay@edstellar.com)
 *     - Who has access:  Anyone
 *  4. Authorize the script when prompted (it needs Gmail send permission)
 *  5. Copy the "Web app URL" (looks like https://script.google.com/macros/s/AKfy.../exec)
 *  6. Set it as NEXT_PUBLIC_ENQUIRY_ENDPOINT in .env.local and on Vercel
 *  7. After any code edits, run Deploy → Manage deployments → edit → New version
 *     (the existing URL stays the same once you keep the same deployment)
 */

const RECIPIENT = 'vijay@edstellar.com';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const name = String(data.name || '').trim();
    const org = String(data.org || '').trim();
    const email = String(data.email || '').trim();
    const message = String(data.message || '').trim();

    if (!name || !email) {
      return json({ ok: false, error: 'Name and email are required' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: 'Invalid email' });
    }

    const subject = 'Edstellar Foundation Enquiry from ' + name;
    const body = [
      'You received a new enquiry from the Edstellar Foundation site.',
      '',
      'Name:         ' + name,
      'Organisation: ' + (org || '—'),
      'Email:        ' + email,
      '',
      'Message:',
      message || '—',
      '',
      '— Sent ' + new Date().toISOString(),
    ].join('\n');

    MailApp.sendEmail({
      to: RECIPIENT,
      replyTo: email,
      subject: subject,
      body: body,
    });

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json({ ok: true, info: 'Edstellar enquiry endpoint. POST JSON to submit.' });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
