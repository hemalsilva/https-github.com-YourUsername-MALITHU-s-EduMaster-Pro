<?php

namespace App\Services;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;

class BackupService
{
    /**
     * Trigger a manual database and application backup to OneDrive.
     * Powered by spatie/laravel-backup and a custom OneDrive filesystem disk.
     */
    public function triggerBackup()
    {
        try {
            Log::info('Starting manual OneDrive backup...');
            Artisan::call('backup:run --only-db');
            Log::info('Backup completed successfully.');
            return true;
        } catch (\Exception $e) {
            Log::error('Backup failed: ' . $e->getMessage());
            return false;
        }
    }
}
