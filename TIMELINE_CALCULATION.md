# Dynamic Timeline Calculation System

## Overview
The pricing calculator now uses a **complexity-weighted timeline model** that adjusts delivery time based on the features selected, making timelines more realistic and transparent.

## Timeline Ranges by Tier

| Tier | Base Timeline | Timeline Range | Max Features |
|------|---------------|----------------|--------------|
| Starter MVP | 2 weeks | 2 weeks (fixed) | 0 add-ons |
| Standard MVP | 4 weeks | 4-6 weeks | 6 add-ons |
| Full Application | 6 weeks | 6-9 weeks | 9 add-ons |
| Enterprise Solution | 8 weeks | 8-14 weeks | 17 add-ons |

## How It Works

### Complexity Points
Each feature has a complexity rating:
- **Simple (1 point):** Notifications, Search, Reports, Social Login
- **Medium (1.5 points):** Payments, Analytics, Location Intelligence
- **Complex (2 points):** Chat, Real-time, Firebase
- **Very Complex (3 points):** KYC/AML, Stripe Commerce, SSO, Web3, Token Development, Smart Contracts
- **Maximum (3.5 points):** Fireblocks Integration

### Calculation Formula
```
Tier Capacity:
- Standard: 6 points in 4 weeks
- Full: 9 points in 6 weeks
- Enterprise: 12 points in 8 weeks

Additional Time:
- Excess Complexity = Total Points - Tier Capacity
- Additional Weeks = ceiling(Excess / Divisor)
  * Standard/Full divisor: 3
  * Enterprise divisor: 4
  
Final Timeline = Base Weeks + Additional Weeks (capped at max)
```

## Example Scenarios

### Standard MVP Examples

1. **Light Load (4 weeks):**
   - Notifications (1) + Search (1) = 2 points
   - Under capacity (6 points) → No additional time
   - **Timeline: 4 weeks**

2. **Medium Load (5 weeks):**
   - Chat (2) + Real-time (2) + Analytics (1.5) + Payments (1.5) = 7 points
   - Excess: 1 point → +1 week (ceil(1/3) = 1)
   - **Timeline: 4-5 weeks**

3. **Heavy Load (6 weeks):**
   - Firebase (2) + Real-time (2) + Chat (2) + Location (1.5) + Analytics (1.5) + Payments (1.5) = 10.5 points
   - Excess: 4.5 points → +2 weeks (ceil(4.5/3) = 2)
   - **Timeline: 4-6 weeks** (capped at 6)

### Full Application Examples

1. **Light Load (6 weeks):**
   - 3 simple features = 3 points
   - Under capacity → **Timeline: 6 weeks**

2. **Heavy Load (9 weeks):**
   - All 9 features including KYC (3) + Stripe Commerce (3) + 7 others = ~17.5 points
   - Excess: 8.5 points → +3 weeks (ceil(8.5/3) = 3)
   - **Timeline: 6-9 weeks** (capped at 9)

### Enterprise Examples

1. **Medium Complexity (10 weeks):**
   - 12 features without Fireblocks = ~13 points
   - Excess: 1 point → +1 week (ceil(1/4) = 1)
   - **Timeline: 8-9 weeks**

2. **Maximum Complexity (14 weeks):**
   - All 17 features including Fireblocks = ~36 points
   - Excess: 24 points → +6 weeks (ceil(24/4) = 6)
   - **Timeline: 8-14 weeks** (capped at 14)

## User-Facing Messages

### Timeline Card
- Starter: "Fixed 2-week timeline for rapid validation"
- Standard/Full/Enterprise: "Timeline scales with feature complexity. Complex features (Firebase, Real-time, KYC/AML, Web3, Fireblocks) extend delivery time."

### Terms & Conditions
"**Timeline Calculation:** Delivery time scales with feature complexity. Simple features add minimal time, while complex integrations (KYC/AML, Fireblocks, Web3, Real-time, Firebase) extend the timeline proportionally. Enterprise projects with all 17 features may require up to 14 weeks"

### PDF Export
"Timeline: Scales with complexity. Complex features (KYC/AML, Web3, Fireblocks) extend delivery"

## Business Sustainability

✅ **All timelines are profitable:**
- Monthly overhead: $8,300 (2.5M LKR)
- Even maximum Enterprise (14 weeks, ~$55k+) clears overhead with margin
- Timelines account for production-ready code, not prototypes

## Recommendations

1. **Ongoing Validation:** Periodically verify complexity weights match actual delivery effort
2. **Metrics Tracking:** Monitor real project timelines to calibrate tier capacities and divisors
3. **Firebase Weight:** Currently 2 points (complex). Consider upgrading to 3 (very complex) if delivery data suggests
