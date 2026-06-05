export type MonthlyData = {
  month: string
  sort: number
  avgClose: number
  avgOpen: number
  maxHigh: number
  minLow: number
  avgVolume: number
}

export const MONTHLY_DATA: MonthlyData[] = [
  { month: 'Jan 2021', sort: 202101, avgClose: 160.00, avgOpen: 159.50, maxHigh: 168.19, minLow: 154.30, avgVolume: 3764411 },
  { month: 'Feb 2021', sort: 202102, avgClose: 163.20, avgOpen: 162.80, maxHigh: 171.70, minLow: 151.84, avgVolume: 3795676 },
  { month: 'Mar 2021', sort: 202103, avgClose: 153.41, avgOpen: 153.10, maxHigh: 159.10, minLow: 144.05, avgVolume: 3400217 },
  { month: 'Apr 2021', sort: 202104, avgClose: 167.61, avgOpen: 167.20, maxHigh: 177.70, minLow: 155.78, avgVolume: 3659218 },
  { month: 'May 2021', sort: 202105, avgClose: 162.31, avgOpen: 161.90, maxHigh: 174.33, minLow: 156.37, avgVolume: 3759581 },
  { month: 'Jun 2021', sort: 202106, avgClose: 168.39, avgOpen: 168.00, maxHigh: 176.24, minLow: 158.61, avgVolume: 3045961 },
  { month: 'Jul 2021', sort: 202107, avgClose: 180.80, avgOpen: 180.20, maxHigh: 188.65, minLow: 165.35, avgVolume: 3987445 },
  { month: 'Aug 2021', sort: 202108, avgClose: 165.65, avgOpen: 165.20, maxHigh: 173.63, minLow: 158.79, avgVolume: 2857590 },
  { month: 'Sep 2021', sort: 202109, avgClose: 171.36, avgOpen: 171.00, maxHigh: 177.50, minLow: 163.70, avgVolume: 2978102 },
  { month: 'Oct 2021', sort: 202110, avgClose: 166.71, avgOpen: 166.30, maxHigh: 173.95, minLow: 158.81, avgVolume: 3032415 },
  { month: 'Nov 2021', sort: 202111, avgClose: 175.88, avgOpen: 175.40, maxHigh: 188.11, minLow: 164.18, avgVolume: 3610318 },
  { month: 'Dec 2021', sort: 202112, avgClose: 170.86, avgOpen: 170.50, maxHigh: 177.99, minLow: 165.20, avgVolume: 2927958 },
  { month: 'Jan 2022', sort: 202201, avgClose: 155.48, avgOpen: 155.10, maxHigh: 171.40, minLow: 135.35, avgVolume: 3813928 },
  { month: 'Feb 2022', sort: 202202, avgClose: 153.78, avgOpen: 153.40, maxHigh: 163.83, minLow: 138.33, avgVolume: 4447722 },
  { month: 'Mar 2022', sort: 202203, avgClose: 154.28, avgOpen: 153.90, maxHigh: 170.83, minLow: 133.57, avgVolume: 3540415 },
  { month: 'Apr 2022', sort: 202204, avgClose: 151.31, avgOpen: 150.90, maxHigh: 168.39, minLow: 121.63, avgVolume: 3662840 },
  { month: 'May 2022', sort: 202205, avgClose: 112.47, avgOpen: 112.10, maxHigh: 126.22, minLow: 101.26, avgVolume: 5377322 },
  { month: 'Jun 2022', sort: 202206, avgClose: 112.86, avgOpen: 112.50, maxHigh: 128.99, minLow: 101.43, avgVolume: 69455685 },
  { month: 'Jul 2022', sort: 202207, avgClose: 117.04, avgOpen: 116.70, maxHigh: 137.65, minLow: 105.85, avgVolume: 66900289 },
  { month: 'Aug 2022', sort: 202208, avgClose: 137.44, avgOpen: 137.00, maxHigh: 146.57, minLow: 126.74, avgVolume: 50892326 },
  { month: 'Sep 2022', sort: 202209, avgClose: 123.21, avgOpen: 122.90, maxHigh: 136.49, minLow: 112.06, avgVolume: 57640779 },
  { month: 'Oct 2022', sort: 202210, avgClose: 114.46, avgOpen: 114.10, maxHigh: 123.00, minLow: 97.66, avgVolume: 69500552 },
  { month: 'Nov 2022', sort: 202211, avgClose: 93.95, avgOpen: 93.60, maxHigh: 104.58, minLow: 85.87, avgVolume: 96916782 },
  { month: 'Dec 2022', sort: 202212, avgClose: 87.94, avgOpen: 87.60, maxHigh: 97.23, minLow: 81.69, avgVolume: 73771101 },
  { month: 'Jan 2023', sort: 202301, avgClose: 94.22, avgOpen: 93.90, maxHigh: 103.49, minLow: 81.43, avgVolume: 76189919 },
  { month: 'Feb 2023', sort: 202302, avgClose: 99.21, avgOpen: 98.90, maxHigh: 114.00, minLow: 92.32, avgVolume: 71799911 },
  { month: 'Mar 2023', sort: 202303, avgClose: 96.55, avgOpen: 96.20, maxHigh: 103.49, minLow: 88.12, avgVolume: 58672478 },
  { month: 'Apr 2023', sort: 202304, avgClose: 103.34, avgOpen: 103.00, maxHigh: 110.86, minLow: 97.71, avgVolume: 64433399 },
  { month: 'May 2023', sort: 202305, avgClose: 111.94, avgOpen: 111.60, maxHigh: 122.92, minLow: 101.15, avgVolume: 65138143 },
  { month: 'Jun 2023', sort: 202306, avgClose: 126.38, avgOpen: 126.00, maxHigh: 131.49, minLow: 119.93, avgVolume: 59193870 },
  { month: 'Jul 2023', sort: 202307, avgClose: 130.82, avgOpen: 130.50, maxHigh: 136.65, minLow: 125.92, avgVolume: 52954897 },
  { month: 'Aug 2023', sort: 202308, avgClose: 135.50, avgOpen: 135.10, maxHigh: 143.63, minLow: 126.41, avgVolume: 52760739 },
  { month: 'Sep 2023', sort: 202309, avgClose: 135.44, avgOpen: 135.10, maxHigh: 145.86, minLow: 123.04, avgVolume: 56026162 },
  { month: 'Oct 2023', sort: 202310, avgClose: 128.28, avgOpen: 127.90, maxHigh: 134.48, minLow: 118.35, avgVolume: 55668488 },
  { month: 'Nov 2023', sort: 202311, avgClose: 143.46, avgOpen: 143.10, maxHigh: 149.26, minLow: 133.71, avgVolume: 48866752 },
  { month: 'Dec 2023', sort: 202312, avgClose: 149.82, avgOpen: 149.50, maxHigh: 155.63, minLow: 142.81, avgVolume: 46566120 },
  { month: 'Jan 2024', sort: 202401, avgClose: 153.62, avgOpen: 153.20, maxHigh: 161.73, minLow: 144.05, avgVolume: 45429285 },
  { month: 'Feb 2024', sort: 202402, avgClose: 171.00, avgOpen: 170.60, maxHigh: 177.22, minLow: 155.62, avgVolume: 52257891 },
  { month: 'Mar 2024', sort: 202403, avgClose: 176.82, avgOpen: 176.40, maxHigh: 181.70, minLow: 171.47, avgVolume: 35102835 },
  { month: 'Apr 2024', sort: 202404, avgClose: 181.17, avgOpen: 180.80, maxHigh: 189.77, minLow: 166.32, avgVolume: 41689326 },
  { month: 'May 2024', sort: 202405, avgClose: 184.18, avgOpen: 183.80, maxHigh: 191.70, minLow: 173.87, avgVolume: 40560867 },
  { month: 'Jun 2024', sort: 202406, avgClose: 186.08, avgOpen: 185.70, maxHigh: 199.84, minLow: 175.92, avgVolume: 42803992 },
  { month: 'Jul 2024', sort: 202407, avgClose: 190.33, avgOpen: 190.00, maxHigh: 201.20, minLow: 176.80, avgVolume: 39459900 },
  { month: 'Aug 2024', sort: 202408, avgClose: 172.39, avgOpen: 172.00, maxHigh: 190.60, minLow: 151.61, avgVolume: 44137458 },
  { month: 'Sep 2024', sort: 202409, avgClose: 184.87, avgOpen: 184.50, maxHigh: 195.37, minLow: 171.16, avgVolume: 38256263 },
  { month: 'Oct 2024', sort: 202410, avgClose: 186.83, avgOpen: 186.50, maxHigh: 195.61, minLow: 180.25, avgVolume: 31915971 },
  { month: 'Nov 2024', sort: 202411, avgClose: 204.51, avgOpen: 204.10, maxHigh: 215.90, minLow: 194.31, avgVolume: 45296906 },
  { month: 'Dec 2024', sort: 202412, avgClose: 224.10, avgOpen: 223.70, maxHigh: 233.00, minLow: 209.51, avgVolume: 34767803 },
  { month: 'Jan 2025', sort: 202501, avgClose: 228.02, avgOpen: 227.60, maxHigh: 241.77, minLow: 216.20, avgVolume: 32631454 },
  { month: 'Feb 2025', sort: 202502, avgClose: 225.85, avgOpen: 225.40, maxHigh: 242.52, minLow: 204.16, avgVolume: 41248338 },
  { month: 'Mar 2025', sort: 202503, avgClose: 198.51, avgOpen: 198.10, maxHigh: 214.01, minLow: 184.40, avgVolume: 46040818 },
  { month: 'Apr 2025', sort: 202504, avgClose: 181.21, avgOpen: 180.80, maxHigh: 198.34, minLow: 161.38, avgVolume: 62528260 },
  { month: 'May 2025', sort: 202505, avgClose: 200.06, avgOpen: 199.70, maxHigh: 214.84, minLow: 183.85, avgVolume: 42809269 },
  { month: 'Jun 2025', sort: 202506, avgClose: 213.02, avgOpen: 212.60, maxHigh: 223.82, minLow: 202.68, avgVolume: 43540145 },
  { month: 'Jul 2025', sort: 202507, avgClose: 226.30, avgOpen: 225.90, maxHigh: 236.53, minLow: 217.93, avgVolume: 38909833 },
  { month: 'Aug 2025', sort: 202508, avgClose: 224.67, avgOpen: 224.30, maxHigh: 234.08, minLow: 211.42, avgVolume: 41796560 },
  { month: 'Sep 2025', sort: 202509, avgClose: 228.09, avgOpen: 227.70, maxHigh: 238.85, minLow: 216.47, avgVolume: 45957147 },
  { month: 'Oct 2025', sort: 202510, avgClose: 222.15, avgOpen: 221.80, maxHigh: 250.50, minLow: 211.03, avgVolume: 52038120 },
  { month: 'Nov 2025', sort: 202511, avgClose: 236.27, avgOpen: 235.90, maxHigh: 258.60, minLow: 215.18, avgVolume: 47488047 },
  { month: 'Dec 2025', sort: 202512, avgClose: 229.26, avgOpen: 228.90, maxHigh: 238.97, minLow: 220.99, avgVolume: 35816384 },
  { month: 'Jan 2026', sort: 202601, avgClose: 239.08, avgOpen: 238.70, maxHigh: 248.94, minLow: 224.70, avgVolume: 42103019 },
  { month: 'Feb 2026', sort: 202602, avgClose: 226.05, avgOpen: 225.70, maxHigh: 246.35, minLow: 200.31, avgVolume: 86095979 },
]

export const LAST_PRICE = 208.72
export const LAST_DATE = 'Feb 9, 2026'
export const ALL_TIME_HIGH = 254.00
export const ALL_TIME_LOW = 81.82
export const AVG_CLOSE = 164.88
export const TOTAL_DAYS = 1281
export const FIRST_PRICE = 159.33
export const PRICE_CHANGE_PCT = ((LAST_PRICE - FIRST_PRICE) / FIRST_PRICE * 100)
