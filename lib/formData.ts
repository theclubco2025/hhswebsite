const MAX_FILE_BYTES = 8 * 1024 * 1024;
const MAX_FILES = 5;

export class UploadError extends Error {}

export async function parsePhotoUploads(formData: FormData, field = "photos") {
  const files = formData.getAll(field).filter((v): v is File => v instanceof File && v.size > 0);

  if (files.length === 0) return [];
  if (files.length > MAX_FILES) {
    throw new UploadError(`Please attach ${MAX_FILES} photos or fewer.`);
  }

  const uploads = [];
  for (const file of files) {
    if (file.size > MAX_FILE_BYTES) {
      throw new UploadError(`"${file.name}" is too large. Please attach photos under 8MB each.`);
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    uploads.push({ filename: file.name, mimeType: file.type || "application/octet-stream", buffer });
  }
  return uploads;
}
