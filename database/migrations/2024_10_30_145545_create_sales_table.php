<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->uuid('id')->default(DB::raw('(UUID())'))->primary();
            $table->string('code')->unique();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('name');
            $table->string('lastname');
            $table->longText('fullname')->nullable();
            $table->longText('email');
            $table->string('phone');
            $table->longText('country');
            $table->longText('department');
            $table->longText('province')->nullable();
            $table->longText('district')->nullable();
            $table->longText('zip_code')->nullable();
            $table->longText('address');
            $table->longText('number');
            $table->longText('reference')->nullable();
            $table->longText('comment')->nullable();
            $table->decimal('amount', 10);
            $table->decimal('delivery', 10);
            $table->foreignUuid('status_id')->nullable()->constrained('statuses')->nullOnDelete();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
