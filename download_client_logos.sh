#!/usr/bin/env bash
# Downloads all client logos from Lovable CDN
# Run this alongside download_images.sh

set -e
BASE="https://bigthings.lovable.app/__l5e/assets-v1"
echo "Downloading client logos..."

mkdir -p "public/__l5e/assets-v1/6b4a7040-f2b3-4c26-9188-98166b5f355a"
curl -fsSL "$BASE/6b4a7040-f2b3-4c26-9188-98166b5f355a/sherbrooke.png" -o "public/__l5e/assets-v1/6b4a7040-f2b3-4c26-9188-98166b5f355a/sherbrooke.png" && echo "✓ sherbrooke" || echo "✗ sherbrooke"

mkdir -p "public/__l5e/assets-v1/36174822-4b33-4d54-8671-f4459ab0350c"
curl -fsSL "$BASE/36174822-4b33-4d54-8671-f4459ab0350c/attijari.png" -o "public/__l5e/assets-v1/36174822-4b33-4d54-8671-f4459ab0350c/attijari.png" && echo "✓ attijari" || echo "✗ attijari"

mkdir -p "public/__l5e/assets-v1/ba3fde77-9ccb-4e33-b306-4ff8fd933dec"
curl -fsSL "$BASE/ba3fde77-9ccb-4e33-b306-4ff8fd933dec/att.png" -o "public/__l5e/assets-v1/ba3fde77-9ccb-4e33-b306-4ff8fd933dec/att.png" && echo "✓ att" || echo "✗ att"

mkdir -p "public/__l5e/assets-v1/3988ec73-d476-434c-b982-4fb9ec7b8754"
curl -fsSL "$BASE/3988ec73-d476-434c-b982-4fb9ec7b8754/bestevent.png" -o "public/__l5e/assets-v1/3988ec73-d476-434c-b982-4fb9ec7b8754/bestevent.png" && echo "✓ bestevent" || echo "✗ bestevent"

mkdir -p "public/__l5e/assets-v1/9d71dd43-f8fd-4878-8bb8-07e4c81f8f4b"
curl -fsSL "$BASE/9d71dd43-f8fd-4878-8bb8-07e4c81f8f4b/bomi.png" -o "public/__l5e/assets-v1/9d71dd43-f8fd-4878-8bb8-07e4c81f8f4b/bomi.png" && echo "✓ bomi" || echo "✗ bomi"

mkdir -p "public/__l5e/assets-v1/9f61e1e1-2b7b-46bc-ae07-dcf7c16e1bca"
curl -fsSL "$BASE/9f61e1e1-2b7b-46bc-ae07-dcf7c16e1bca/client-armee.png" -o "public/__l5e/assets-v1/9f61e1e1-2b7b-46bc-ae07-dcf7c16e1bca/client-armee.png" && echo "✓ armee" || echo "✗ armee"

mkdir -p "public/__l5e/assets-v1/dd87ed4b-1066-4af7-8420-65890290968f"
curl -fsSL "$BASE/dd87ed4b-1066-4af7-8420-65890290968f/genesis.png" -o "public/__l5e/assets-v1/dd87ed4b-1066-4af7-8420-65890290968f/genesis.png" && echo "✓ genesis" || echo "✗ genesis"

mkdir -p "public/__l5e/assets-v1/2aa07c7e-82b3-4f1e-a7c3-26f1c3bdb659"
curl -fsSL "$BASE/2aa07c7e-82b3-4f1e-a7c3-26f1c3bdb659/ghs.png" -o "public/__l5e/assets-v1/2aa07c7e-82b3-4f1e-a7c3-26f1c3bdb659/ghs.png" && echo "✓ ghs" || echo "✗ ghs"

mkdir -p "public/__l5e/assets-v1/4064e276-302d-4592-be1c-891a07f5a46d"
curl -fsSL "$BASE/4064e276-302d-4592-be1c-891a07f5a46d/hyundai.png" -o "public/__l5e/assets-v1/4064e276-302d-4592-be1c-891a07f5a46d/hyundai.png" && echo "✓ hyundai" || echo "✗ hyundai"

mkdir -p "public/__l5e/assets-v1/765e9617-5bb2-453a-8a03-b7d06359d6e9"
curl -fsSL "$BASE/765e9617-5bb2-453a-8a03-b7d06359d6e9/iseki.png" -o "public/__l5e/assets-v1/765e9617-5bb2-453a-8a03-b7d06359d6e9/iseki.png" && echo "✓ iseki" || echo "✗ iseki"

mkdir -p "public/__l5e/assets-v1/3887ad45-a106-4b52-86c5-58c04636b9ae"
curl -fsSL "$BASE/3887ad45-a106-4b52-86c5-58c04636b9ae/client-caverne.png" -o "public/__l5e/assets-v1/3887ad45-a106-4b52-86c5-58c04636b9ae/client-caverne.png" && echo "✓ caverne" || echo "✗ caverne"

mkdir -p "public/__l5e/assets-v1/c997c19b-077c-4646-9cc6-c69b5fa1a79d"
curl -fsSL "$BASE/c997c19b-077c-4646-9cc6-c69b5fa1a79d/client-bosphore.png" -o "public/__l5e/assets-v1/c997c19b-077c-4646-9cc6-c69b5fa1a79d/client-bosphore.png" && echo "✓ bosphore" || echo "✗ bosphore"

mkdir -p "public/__l5e/assets-v1/6d6a1a0d-dabf-46f5-8962-59e9a23028f7"
curl -fsSL "$BASE/6d6a1a0d-dabf-46f5-8962-59e9a23028f7/client-carrefour.png" -o "public/__l5e/assets-v1/6d6a1a0d-dabf-46f5-8962-59e9a23028f7/client-carrefour.png" && echo "✓ carrefour" || echo "✗ carrefour"

mkdir -p "public/__l5e/assets-v1/2c9d87f0-5fa6-488c-abd8-de8e1da897b6"
curl -fsSL "$BASE/2c9d87f0-5fa6-488c-abd8-de8e1da897b6/client-ladybug.png" -o "public/__l5e/assets-v1/2c9d87f0-5fa6-488c-abd8-de8e1da897b6/client-ladybug.png" && echo "✓ ladybug" || echo "✗ ladybug"

mkdir -p "public/__l5e/assets-v1/ecfc5e27-c2da-4f1e-ae69-9edb07110b2f"
curl -fsSL "$BASE/ecfc5e27-c2da-4f1e-ae69-9edb07110b2f/client-meublealoui.png" -o "public/__l5e/assets-v1/ecfc5e27-c2da-4f1e-ae69-9edb07110b2f/client-meublealoui.png" && echo "✓ meublealoui" || echo "✗ meublealoui"

mkdir -p "public/__l5e/assets-v1/da25c89c-ddd0-4edc-97b4-ec35bcbf87cd"
curl -fsSL "$BASE/da25c89c-ddd0-4edc-97b4-ec35bcbf87cd/client-perla.png" -o "public/__l5e/assets-v1/da25c89c-ddd0-4edc-97b4-ec35bcbf87cd/client-perla.png" && echo "✓ perla" || echo "✗ perla"

mkdir -p "public/__l5e/assets-v1/2bb34455-4d46-437e-8894-d87a5816db2c"
curl -fsSL "$BASE/2bb34455-4d46-437e-8894-d87a5816db2c/client-tulip.png" -o "public/__l5e/assets-v1/2bb34455-4d46-437e-8894-d87a5816db2c/client-tulip.png" && echo "✓ tulip" || echo "✗ tulip"

mkdir -p "public/__l5e/assets-v1/aa77e3f1-de5d-4dce-a8f3-d7ebbb08f592"
curl -fsSL "$BASE/aa77e3f1-de5d-4dce-a8f3-d7ebbb08f592/client-mabrouka.png" -o "public/__l5e/assets-v1/aa77e3f1-de5d-4dce-a8f3-d7ebbb08f592/client-mabrouka.png" && echo "✓ mabrouka" || echo "✗ mabrouka"

mkdir -p "public/__l5e/assets-v1/8ab59eae-b28d-4097-bebe-22ee1d48dce3"
curl -fsSL "$BASE/8ab59eae-b28d-4097-bebe-22ee1d48dce3/client-voltenergy.png" -o "public/__l5e/assets-v1/8ab59eae-b28d-4097-bebe-22ee1d48dce3/client-voltenergy.png" && echo "✓ voltenergy" || echo "✗ voltenergy"

mkdir -p "public/__l5e/assets-v1/f723afeb-97fb-4196-bcb8-a3821ab8d0ef"
curl -fsSL "$BASE/f723afeb-97fb-4196-bcb8-a3821ab8d0ef/client-mediterranee.png" -o "public/__l5e/assets-v1/f723afeb-97fb-4196-bcb8-a3821ab8d0ef/client-mediterranee.png" && echo "✓ mediterranee" || echo "✗ mediterranee"

mkdir -p "public/__l5e/assets-v1/1fcf4198-b313-473f-8479-1aac1f7d04ab"
curl -fsSL "$BASE/1fcf4198-b313-473f-8479-1aac1f7d04ab/client-xiaomi.png" -o "public/__l5e/assets-v1/1fcf4198-b313-473f-8479-1aac1f7d04ab/client-xiaomi.png" && echo "✓ xiaomi" || echo "✗ xiaomi"

echo ""
echo "Client logos done!"
