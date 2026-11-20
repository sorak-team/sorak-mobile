import { apiClient } from '@/shared/api/client';

const path = '/notifications/device-token';

export async function registerPushDevice(device, accessToken) {
  const config = accessToken
    ? { skipSession: true, headers: { Authorization: `Bearer ${accessToken}` } }
    : undefined;
  const { data } = await apiClient.post(path, device, config);
  if (data?.success !== true) throw new Error('Push registration was not confirmed');
}

export async function unregisterPushDevice(deviceToken, accessToken, refreshToken) {
  const config = {
    data: { deviceToken, refreshToken },
    skipSession: true,
  };
  if (accessToken) {
    config.headers = { Authorization: `Bearer ${accessToken}` };
  }
  const { data } = await apiClient.delete(path, config);
  if (data?.success !== true) throw new Error('Push removal was not confirmed');
}
