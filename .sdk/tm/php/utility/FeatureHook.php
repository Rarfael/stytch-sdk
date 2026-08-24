<?php
declare(strict_types=1);

// Stytch SDK utility: feature_hook

class StytchFeatureHook
{
    public static function call(StytchContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
